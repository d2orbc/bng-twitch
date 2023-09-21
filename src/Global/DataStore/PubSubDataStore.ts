import { GlobalSystemStatus } from "Global/Contracts/Proto/Messages/GlobalSystemStatus";
import { Nullish } from 'Global/EBS/Util/TypesUtil';
import Long from "long";
import { configure, util } from "protobufjs";
import { BroadcasterSystemStatus, DefaultSystemStatus, IInclusiveSystemStatus } from '../Contracts/Proto/Messages/BroadcasterSystemStatus';
import { DestinyActivityEndMessage } from '../Contracts/Proto/Messages/DestinyActivityEndMessage';
import { DestinyPlayerUpdateMessage } from '../Contracts/Proto/Messages/DestinyPlayerUpdateMessage';
import { GiftsubRewardMessage } from '../Contracts/Proto/Messages/GiftsubRewardMessage';
import { PubsubMessageEnvelope, ValidMessages } from '../Contracts/Proto/Messages/PubsubMessageEnvelope';
import EBS from '../EBS/ebs';
import { decodeProtobufMessage } from '../EBS/Util/ProtobufUtils';
import { setMockUsed } from '../Mock/MockData';
import { ServiceError } from '../Utils/CustomErrors';
import { LogMessage } from '../Utils/Logger';
import { DataStore } from './DataStore';
import { ErrorDataStore } from './ErrorDataStore';
import StreamerStateDataStore from './StreamerStateDataStore';
// @ts-ignore-line
const env = __ENVIRONMENT__;
require(`Global/Contracts/generated_protobuf_contracts_${env}`);


util.Long = Long;
configure();

interface IErrorData
{
	message: string;
}

export interface IPubSubDataStorePayload
{
	isPlayingTrials: boolean;
	isStreaming: boolean;
	streamerIsLinked: boolean;
	playerData: DestinyPlayerUpdateMessage | Nullish;
	activityEnd: DestinyActivityEndMessage | Nullish;
	systemStatus: IInclusiveSystemStatus;
	giftSubReward: GiftsubRewardMessage | Nullish;
	errorData: IErrorData | Nullish;
	twitchContext: Partial<TwitchExtContext> | Nullish;
}

/** Tracks all of the information about the streamer and all of the major systems for displaying game data. */
class PubSubDataStore extends DataStore<IPubSubDataStorePayload>
{
	/** This is unsafe because ultimately, we mux (using AND logic) the global system status and the broadcaster system status into one final status */
	private unsafeGlobalSystemStatus: GlobalSystemStatus | Nullish;
	private unsafeBroadcasterSystemStatus: BroadcasterSystemStatus | Nullish;

	private readonly listeners: { [k in ValidMessages]?: (data: any) => void; } = {};

	public static MOCK_SYSTEM_STATUS = setMockUsed(false); 

	private static initialState: IPubSubDataStorePayload = {
		isStreaming: false,
		isPlayingTrials: false,
		streamerIsLinked: false,
		playerData: null,
		activityEnd: null,
		systemStatus: DefaultSystemStatus,
		giftSubReward: null,
		errorData: null,
		twitchContext: {}
	};

	public static Instance = new PubSubDataStore(PubSubDataStore.initialState)

	private isInitialized = false;

	protected update(data: Partial<IPubSubDataStorePayload>)
	{
		const didUpdate = super.update(data);

		if (didUpdate)
		{
			LogMessage("PubSubDataStore Update", this.state);
		}

		return didUpdate;
	}

	/** This has to happen after Twitch auth occurs */
	public initializeOnce()
	{
		if (this.isInitialized)
		{
			return;
		}

		LogMessage("Initializing PubSubDataStore...");

		Twitch.ext.onContext((twitchContext) =>
		{
			const tc = twitchContext;

			// These properties change a lot and cause a rerender. We don't need them.
			delete tc.bitrate;
			delete tc.bufferSize;
			delete tc.hlsLatencyBroadcaster;

			this.update({
				twitchContext: {
					...this.state.twitchContext,
					...tc
				}
			});
		});

		this.listenToTwitch();

		this.addTopicListener("GlobalSystemStatus", (data: GlobalSystemStatus) =>
		{
			this.unsafeGlobalSystemStatus = data;
			const systemStatus = this.getDerivedSystemStatus();
			return { systemStatus };
		});

		this.addTopicListener("BroadcasterSystemStatus", (data: BroadcasterSystemStatus) =>
		{
			this.unsafeBroadcasterSystemStatus = data;
			const systemStatus = this.getDerivedSystemStatus();
			return { systemStatus };
		});

		this.addTopicListener("DestinyStreamEndMessage", _ => ({
			isStreaming: true
		}));

		this.addTopicListener("DestinyPlayerUpdateMessage", (data: DestinyPlayerUpdateMessage) =>
		{
			return {
				playerData: data,
				isPlayingTrials: this.isPlayingTrials(data)
			};
		});

		this.addTopicListener("DestinyActivityEndMessage", (data: DestinyActivityEndMessage) => ({
			activityEnd: data
		}));

		this.addTopicListener("GiftsubRewardMessage", (data: GiftsubRewardMessage) => ({
			giftSubReward: data
		}));

		StreamerStateDataStore.observe(data =>
		{
			let systemStatus = this.state.systemStatus;
			let playerData = this.state.playerData;
			let streamerIsLinked = this.state.streamerIsLinked;
			let isPlayingTrials = this.state.isPlayingTrials;

			if (data.status?.Response)
			{
				this.unsafeBroadcasterSystemStatus = data.status?.Response?.unsafeBroadcasterSystemStatus;
				this.unsafeGlobalSystemStatus = data.status?.Response?.unsafeGlobalSystemStatus;

				playerData = data.status?.Response.PlayerStatus;
				systemStatus = this.getDerivedSystemStatus();
				streamerIsLinked = data.status?.Response.IsLinked;
				isPlayingTrials = this.isPlayingTrials(data.status.Response.PlayerStatus);

				if (streamerIsLinked === false)
				{
					ErrorDataStore.add(new ServiceError({
						ErrorStringKey: "ERROR_TWITCH_BNET_LINKAGE_INVALID"
					}, true));
				}
			}

			this.update({
				systemStatus,
				playerData,
				streamerIsLinked,
				isPlayingTrials
			});
		});

		this.refreshStreamerState();

		this.isInitialized = true;
	}

	private isPlayingTrials(playerUpdate: DestinyPlayerUpdateMessage | Nullish)
	{
		let isPlayingTrials = playerUpdate?.ActiveDestinyCharacter?.IsPlayingTrials ?? false;

		// Lets us test trials behavior by playing strikes instead these are direct join, hymn, devils lair, fallen saber
		if(EBS.env !== "prod")
		{
			isPlayingTrials = isPlayingTrials || (
				[1917776943, 3777220691, 1254422902, 3725993747].includes(playerUpdate?.ActiveDestinyCharacter?.LastValidPlaylistActivityHash ?? 0)
			);
		}

		return isPlayingTrials;
	}

	public refreshStreamerState(isConfig = false)
	{
		StreamerStateDataStore.refresh(isConfig);
	}

	private getDerivedSystemStatus(): IInclusiveSystemStatus
	{
		if (PubSubDataStore.MOCK_SYSTEM_STATUS)
		{
			return {
				Destiny: true,
				Extension: true,
				GiftSubscriptions: true,
				Reactions: true,
				StatusUpdates: true,
				StreamerMustReauth: true
			};
		}

		const global = this.unsafeGlobalSystemStatus;
		const player = this.unsafeBroadcasterSystemStatus;

		return {
			Destiny: (global?.Destiny && player?.Destiny) ?? false,
			Extension: (global?.Extension && player?.Extension) ?? false,
			GiftSubscriptions: (global?.GiftSubscriptions && player?.GiftSubscriptions) ?? false,
			Reactions: (global?.Reactions && player?.Reactions) ?? false,
			StatusUpdates: (global?.StatusUpdates && player?.StatusUpdates) ?? false,
			StreamerMustReauth: player?.StreamerMustReauth ?? false
		};
	}

	public updatePlayerData(playerData: DestinyPlayerUpdateMessage)
	{
		this.update({
			playerData
		});
	}

	/** Twitch sends us two kinds of messages - global and broadcast. We want to listen to ALL the messages, parse them, then run our own listeners based on the results. */
	private listenToTwitch()
	{
		const onListen = async (target: string, contentType: string, message: string) =>
		{
			LogMessage("Message received!");

			// Decode a base64 message into a protobuf string
			const decodedFromBase64 = atob(message);

			// Decode the Uint8Array into a PubsubMessageEnvelope
			// protobufjs docs say to use root.lookupType, but that method doesn't work if you are using static-module contracts, which we are.
			const envelopeMessage = decodeProtobufMessage<PubsubMessageEnvelope>(PubsubMessageEnvelope.$type.name, decodedFromBase64);

			const {
				MessageType: messageType,
				Payload: payload
			} = envelopeMessage;

			const payloadMessage = decodeProtobufMessage(messageType, payload);

			LogMessage("Message:", payloadMessage);

			const listener = this.listeners[messageType];
			if (listener)
			{
				listener(payloadMessage);
			}
		};

		Twitch.ext.listen("global", onListen);
		Twitch.ext.listen("broadcast", onListen);
	}

	/**
	 * Listen to the PubSub
	 * @param topic The custom topic to listen to
	 * @param cb A callback that takes the data from the PubSub and returns an update to the DataStore
	 */
	private addTopicListener<T>(topic: ValidMessages, cb: (data: T) => Partial<IPubSubDataStorePayload>)
	{
		const actualCallback = (data: T) =>
		{
			const dataUpdate = cb(data);
			this.update(dataUpdate);
		}

		this.listeners[topic] = actualCallback;
	}

	public error(error: IErrorData)
	{
		console.error(error);
		this.update({
			errorData: error
		})
	}
}

export default PubSubDataStore.Instance;