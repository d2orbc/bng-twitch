import deepEqual from "deep-equal";
import { ISettings } from "Global/Contracts/Proto/Messages/BroadcasterSystemStatus";
import { DestinyActivityEndMessage } from "Global/Contracts/Proto/Messages/DestinyActivityEndMessage";
import { Type } from "protobufjs";
import { PlatformType } from "../Contracts/Proto/PlatformType";
import { StreamerStateResponse } from "../Contracts/Proto/StreamerStateResponse";
import { ViewerStateResponse } from "../Contracts/Proto/ViewerStateResponse";
import { ErrorDataStore } from "../DataStore/ErrorDataStore";
import StreamerStateDataStore from "../DataStore/StreamerStateDataStore";
import TwitchUserStateDataStore from "../DataStore/TwitchUserStateDataStore";
import { setMockUsed } from "../Mock/MockData";
import { LogMessage } from "../Utils/Logger";
import { ApiIntermediary } from "./ApiIntermediary";

declare const __ENVIRONMENT__;

export const Environments = {
	local: "https://d-t-d.bungie.net",
	dev: "https://d-t-d.bungie.net",
	next: "https://n-t-d.bungie.net",
	stage: "https://p-t-d.bungie.net",
	prod: "https://p-t-d.bungie.net",
	localBnet: "https://local-admin.bungie.bng.local",
	devBnet: "https://bnetdev.bungie.bng.local",
	nextBnet: "https://bnetnext.bungie.bng.local",
	stageBnet: "https://stage.bungie.net",
	prodBnet: "https://www.bungie.net",
} as const;

class EBS {
	public static Instance = new EBS(__ENVIRONMENT__);

	public MOCK = setMockUsed(false);

	private constructor(public readonly env: keyof typeof Environments) {}

	public getViewerStatus(): Promise<ViewerStateResponse> {
		const twitchAuth = TwitchUserStateDataStore.state.twitchExtAuth;

		if (twitchAuth === null) {
			return Promise.reject("NOT READY");
		}

		const promise = this.MOCK ? this.getMockViewerStatus() : ApiIntermediary.doEbsGetRequest<ViewerStateResponse>("ViewerStateResponse", this.env, `/state/viewer`, undefined);

		return promise;
	}

	private getMockViewerStatus(): Promise<ViewerStateResponse> {
		return new Promise((resolve, reject) => {
			import("Global/Mock/MockData").then(({ MockViewerStateResponse }) => {
				const data = MockViewerStateResponse();

				ApiIntermediary.afterEbsRequestDecode(data);

				resolve(data);
			});
		});
	}

	public getStreamerStatus(bustCache = false): Promise<StreamerStateResponse> {
		const twitchAuth = TwitchUserStateDataStore.state.twitchExtAuth;

		if (twitchAuth === null) {
			return Promise.reject("NOT READY");
		}

		const { channelId } = twitchAuth;

		const bustQuery = bustCache ? `bust=${Date.now()}` : "";

		const promise = this.MOCK ? this.getMockStreamerStatus() : ApiIntermediary.doEbsGetRequest<StreamerStateResponse>("StreamerStateResponse", this.env, `/state/streamer/${channelId}`, [bustQuery]);

		return promise;
	}

	private getMockStreamerStatus(): Promise<StreamerStateResponse> {
		return new Promise((resolve, reject) => {
			import("Global/Mock/MockData").then(({ mockStreamerStatus }) => {
				const data = mockStreamerStatus();

				ApiIntermediary.afterEbsRequestDecode(data);

				resolve(data);
			});
		});
	}

	public setPlatformType(platformType: PlatformType) {
		return ApiIntermediary.doEbsPostRequest(undefined, this.env, `/state/viewer/platform/${platformType}`, undefined);
	}

	public sendReaction(reaction: string, activityEndMessage: DestinyActivityEndMessage) {

		if (!activityEndMessage?.DateEndedSecondsSinceEpoch) {
			ErrorDataStore.add(new Error("Unable to send a reaction without match details."));
			return;
		}

		return ApiIntermediary.doEbsPostRequest( undefined, this.env, `/reactions/react/${reaction}/${activityEndMessage.DateEndedSecondsSinceEpoch}`, undefined);
	}

	/**
	 * Update streamer settings
	 * @param settings
	 * @param newSettings
	 */
	public setSettings(updatedSettings: Partial<ISettings>): Promise<any> {
		if (!StreamerStateDataStore.state?.status?.Response) {
			throw new Error("Tried to update Streamer Settings, but they don't exist.");
		}
		const currentSettings = StreamerStateDataStore.state.status.Response.unsafeBroadcasterSystemStatus.Settings;
		const combinedSettings = { ...currentSettings, ...updatedSettings };

		if (deepEqual(currentSettings, combinedSettings)) {
			LogMessage("No settings changed, didn't attempt to save.");

			return Promise.resolve();
		} else {
			return ApiIntermediary.doEbsPostRequest(undefined, this.env, `/state/streamer/settings`, combinedSettings);
		}
	}
}

export default EBS.Instance;
