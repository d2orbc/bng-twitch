import { LogMessage } from 'Global/Utils/Logger';
import { DataStore } from "./DataStore";

export interface ISettingsDataStoreToggles
{
	visualEffects: boolean;
}

export interface ISettingsDataStorePayload
{
	toggles: ISettingsDataStoreToggles;
}

/** Tracks/stores/broadcasts the viewer's settings. These are stored in localStorage. */
class _SettingsDataStore extends DataStore<ISettingsDataStorePayload>
{
	private static lsKey = "SETTINGS";

	private static defaults: ISettingsDataStorePayload = {
		toggles: {
			visualEffects: true
		}
	};

	public static Instance = new _SettingsDataStore();

	constructor()
	{
		super(_SettingsDataStore.restore() ?? _SettingsDataStore.defaults);
	}

	protected update(data: Partial<ISettingsDataStorePayload>)
	{
		const didUpdate = super.update(data);

		// If there's a difference between this version and last, we want to update localStorage.
		if (didUpdate)
		{
			_SettingsDataStore.store(this.state);
			LogMessage("SettingsDataStore Update", this.state);
		}

		return didUpdate;
	}

	private static store(state: ISettingsDataStorePayload)
	{
		localStorage.setItem(_SettingsDataStore.lsKey, JSON.stringify(state));
	}

	private static restore()
	{
		const settingsString = localStorage.getItem(_SettingsDataStore.lsKey);
		if (settingsString)
		{
			return JSON.parse(settingsString) as ISettingsDataStorePayload;
		}
	}

	public setToggle(name: keyof ISettingsDataStoreToggles, value: boolean)
	{
		const newKvp = { [name]: value };
		const newToggles = { ...this.state.toggles, ...newKvp };

		this.update({
			toggles: newToggles
		});
	}
};

export const SettingsDataStore = _SettingsDataStore.Instance;