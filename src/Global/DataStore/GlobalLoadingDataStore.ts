import { LogMessage } from 'Global/Utils/Logger';
import { DataStore } from './DataStore';

interface IGlobalLoadingDataStorePayload
{
	complete: boolean
}

/**
 * The purpose of this datastore is to determine when the initial load is complete. 
 * We assume loading is complete after no "loading events" have happened for a set time period after initialization.
 */
class GlobalLoadingDataStore extends DataStore<IGlobalLoadingDataStorePayload>
{
	public static Instance = new GlobalLoadingDataStore({ complete: false });
	private static LoadCompleteTimeoutMs = 500;
	private timeout: number = -1;

	private clearAndStartTimer()
	{
		clearTimeout(this.timeout);

		this.timeout = window.setTimeout(this.setComplete, GlobalLoadingDataStore.LoadCompleteTimeoutMs);
	}

	/** Trigger this when something is loaded. */
	public triggerLoadEvent()
	{		
		if (this.state.complete)
		{
			return;
		}

		this.clearAndStartTimer();
	}

	private setComplete = () =>
	{
		LogMessage("Loading Complete");

		this.update({
			complete: true
		});
	}
}

export default GlobalLoadingDataStore.Instance;