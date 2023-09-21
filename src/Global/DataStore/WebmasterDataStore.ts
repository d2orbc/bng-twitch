import { LogMessage } from 'Global/Utils/Logger';
import Platform from '../EBS/Platform';
import { DataStore } from './DataStore';
import { ErrorDataStore } from './ErrorDataStore';


export interface IWebmasterDataStorePayload
{
	loaded: boolean;
	settings: CoreSettingsConfiguration | null;
}

/** DataStore for loading and broadcasting CoreSettings */
class _WebmasterDataStore extends DataStore<IWebmasterDataStorePayload>
{
	public static Instance = new _WebmasterDataStore({
		loaded: false,
		settings: null
	});

	public initialize()
	{
		LogMessage("WebmasterDataStore initialized...");

		Platform.getWebmaster()
			.then(data =>
			{
				this.update({
					settings: data,
					loaded: true
				});

				LogMessage("Webmaster data received", data);
			})
			.catch((e) =>
			{
				ErrorDataStore.add(new Error("Unable to load settings."))
			});
	}
}

export const WebmasterDataStore = _WebmasterDataStore.Instance;