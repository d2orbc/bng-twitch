import { Localizer } from "Global/Localizer/Localizer";
import { StreamerStateResponse } from "../Contracts/Proto/StreamerStateResponse";
import EBS from "../EBS/ebs";
import { ServiceError } from "../Utils/CustomErrors";
import { LogMessage } from "../Utils/Logger";
import { DataStore } from "./DataStore";
import { ErrorDataStore } from "./ErrorDataStore";
import TwitchUserStateDataStore from "./TwitchUserStateDataStore";

export interface IStreamerStateDataStorePayload {
	status: StreamerStateResponse | null;
}

class StreamerStateDataStore extends DataStore<IStreamerStateDataStorePayload> {
	public static Instance = new StreamerStateDataStore({
		status: null,
	});

	constructor(initialData: IStreamerStateDataStorePayload) {
		super(initialData);
	}

	public initialize() {
		this.refresh();

		LogMessage("StreamerStateDataStore initialized...");
	}

	public refresh(bust = false) {
		EBS.getStreamerStatus(bust)
			.then(async (data) => {
				LogMessage("StreamerState updated", data);

				this.update({
					status: data,
				});
			})
			.catch((e) => {
				ErrorDataStore.add(
					new ServiceError({
						ErrorStringKey: "ERROR_STREAMER_STATUS_UNAVAILABLE",
						ErrorStringParams: {
							streamer: TwitchUserStateDataStore.state.twitchExtAuth?.channelId ?? Localizer.Twitchext.StreamerErrorChannelPlaceholder,
						},
					})
				);
			});
	}
}

export default StreamerStateDataStore.Instance;
