import { LogMessage } from 'Global/Utils/Logger';
import { DataStore } from './DataStore';
import PubSubDataStore from './PubSubDataStore';
import StreamerStateDataStore from './StreamerStateDataStore';
import ViewerStateDataStore from './ViewerStateDataStore';

export interface ITwitchUserStateDataStorePayload
{
	viewerLoggedInToTwitch: boolean;
	requiresViewerPermission: boolean;
	twitchExtAuth: TwitchExtAuthorized | null;
	twitchViewer: TwitchExtViewer | null;
}

/** DataStore for the twitch viewer state and various related information. */
class TwitchUserStateDataStore extends DataStore<ITwitchUserStateDataStorePayload>
{
	public static Instance = new TwitchUserStateDataStore({
		viewerLoggedInToTwitch: false,
		requiresViewerPermission: false,
		twitchExtAuth: null,
		twitchViewer: Twitch.ext.viewer
	});

	public initialize(cb: () => void)
	{
		LogMessage("TwitchUserStateDataStore initialized...");

		// This runs when the extension first loads. Note: This will not run again for hot-reload, so if you are using stuff in here,
		// you will need to reload the full page to get it to run again
		Twitch.ext.onAuthorized((authResponse) =>
		{
			LogMessage("Twitch authed...", authResponse);

			// We know the user hasn't logged in if the opaqueID starts with U. If it starts with A, they are authed.
			const viewerLoggedInToTwitch = authResponse.userId.startsWith("U");
			
			// We know the user hasn't granted us permission if they are logged in, but we can't see their ID.
			const requiresViewerPermission = viewerLoggedInToTwitch && Twitch.ext.viewer.id === null && Twitch.ext.viewer.id !== authResponse?.channelId;

			this.update({
				viewerLoggedInToTwitch,
				requiresViewerPermission,
				twitchExtAuth: authResponse,
				twitchViewer: Twitch.ext.viewer
			});

			StreamerStateDataStore.initialize();
			PubSubDataStore.initializeOnce();

			if (!requiresViewerPermission)
			{
				ViewerStateDataStore.initialize();
			}

			Twitch.ext.viewer.onChanged(() =>
			{
				this.update({
					twitchViewer: Twitch.ext.viewer
				})
			});

			cb();
		});
	}
}

export default TwitchUserStateDataStore.Instance;

