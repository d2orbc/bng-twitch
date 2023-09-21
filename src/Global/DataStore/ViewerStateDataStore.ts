import { ViewerBountyStatus } from 'Global/Contracts/Proto/ViewerBountyStatus';
import { ServiceError } from 'Global/Utils/CustomErrors';
import { LogMessage } from 'Global/Utils/Logger';
import { ViewerStateResponse } from '../Contracts/Proto/ViewerStateResponse';
import EBS from '../EBS/ebs';
import { DataStore } from './DataStore';
import { ErrorDataStore } from './ErrorDataStore';

export interface IViewerStateDataStorePayload
{
	status: ViewerStateResponse | null;
}

/** DataStore for loading and broadcasting Twitch viewer status. This is purely for Bungie's knowledge of the viewer, 
 * not the Twitch side of things, which is handled by {TwitchUserStateDataStore} */
class ViewerStateDataStore extends DataStore<IViewerStateDataStorePayload>
{
	public static Instance = new ViewerStateDataStore({
		status: null
	});

	constructor(initialData: IViewerStateDataStorePayload)
	{
		super(initialData);
	}

	public initialize()
	{
		this.refresh();
		
		LogMessage("ViewerStateDataStore initialized...");
	}

	public refresh()
	{
		EBS.getViewerStatus()
			.then(data =>
			{
				LogMessage("ViewerState updated", data);

				this.update({
					status: data
				});
			})
			.catch(e =>
			{
				ErrorDataStore.add(new ServiceError({
					ErrorStringKey: "ERROR_VIEWER_STATUS_FAILED"
				}))
			});;
	}

	public mockUpdate(hash: number, increment: number)
	{
		const existingBounty = this.state.status?.Response?.ViewerBountyStatus?.find(b => b.ProgressionHash === hash);
		const others = this.state.status?.Response?.ViewerBountyStatus?.filter(b => b.ProgressionHash !== hash) ?? [];
		if (existingBounty)
		{
			const newBounty: ViewerBountyStatus = {
				...existingBounty,
				...{
					IsCompleted: (existingBounty.Progress + increment) >= existingBounty.CompletionGoalValue,
					Progress: existingBounty.Progress + increment
				}
			} as ViewerBountyStatus;

			const state = {
				...this.state
			};

			if (state.status?.Response?.ViewerBountyStatus)
			{
				state.status.Response.ViewerBountyStatus = [
					...others,
					newBounty
				] as ViewerBountyStatus[];
			}

			this.update(state);

			return this.state;
		}
	}
}

export default ViewerStateDataStore.Instance;

