import { LogMessage } from 'Global/Utils/Logger';
import { ServiceError } from '../Utils/CustomErrors';
import { StringUtils } from '../Utils/StringUtils';
import { DataStore } from './DataStore';

export interface IErrorDisplay
{
	guid: string;
	error: Error;
	/** If true, the error is being added (this is for animation purposes) */
	adding: boolean;
	/** If true, the error is being removed (this is for animation purposes) */
	removing: boolean;
	stringKey?: string;
	preventClose?: boolean;
}

interface IErrorDataStorePayload
{
	errors: IErrorDisplay[];
}

class _ErrorDataStore extends DataStore<IErrorDataStorePayload>
{
	public static Instance = new _ErrorDataStore({
		errors: []
	});

	public catch(e: any)
	{
		if (e instanceof Error)
		{
			this.add(e);
		}
	}

	// We use error guids mostly just for this purpose - we want to be able to remove them from the list when the user dismisses them,
	// but we can't reliably use the object itself because they aren't the same instance
	public remove(errorOrGuid: IErrorDisplay | string)
	{
		let guid: string;

		if (typeof errorOrGuid === "string")
		{
			guid = errorOrGuid;
		}
		else
		{
			guid = errorOrGuid.guid;
		}

		const errors = this.state.errors.map(error => ({ ...error }));
		for (let error of errors)
		{
			if (error.guid === guid)
			{
				error.removing = true;
			}
		}

		this.update({
			errors
		});

		setTimeout(() =>
		{
			this.update({
				errors: this.state.errors.filter(e => e.guid !== guid)
			});
		}, 250);
	}

	public add(error: Error | undefined)
	{
		LogMessage("Error added", error);

		if (error)
		{
			const newError = {
				guid: StringUtils.generateGuid(),
				error,
				adding: true,
				removing: false
			} as IErrorDisplay;

			if (error instanceof ServiceError)
			{
				newError.stringKey = error.serviceErrorDetail.ErrorStringKey;
				newError.preventClose = error.preventClose;
			}

			const errorAlreadyShown = this.state.errors.find(e => e.error.message === newError.error.message);

			if (!errorAlreadyShown)
			{
				this.update({
					errors: [...this.state.errors, newError]
				});
			}

			return newError.guid;
		}
	}
}

export const ErrorDataStore = _ErrorDataStore.Instance;