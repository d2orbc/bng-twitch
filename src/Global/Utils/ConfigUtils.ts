import { WebmasterDataStore } from '../DataStore/WebmasterDataStore';
export class ConfigUtils
{
	private static get coreSettings()
	{
		const coreSettings = WebmasterDataStore.state.settings;
		if (!coreSettings)
		{
			return null;
		}

		return coreSettings;
	}

	/**
	 * Returns true if the system with the given name is enabled
	 * @param coreSettings
	 * @param systemName
	 */
	public static SystemStatus(systemName: string)
	{
		const coreSettings = ConfigUtils.coreSettings;

		const system = coreSettings?.systems[systemName];

		return system ? system.enabled : false;
	}

	/**
	 * Get a parameter out of config
	 * @param coreSettings Core Settings
	 * @param systemName The name of the system
	 * @param parameterName The name of the parameter in that system
	 * @param defaultValue If no value is found, use this one instead
	 */
	public static GetParameter<T>(systemName: string, parameterName: string, defaultValue: T): T
	{
		const coreSettings = ConfigUtils.coreSettings;

		const system = coreSettings?.systems[systemName];
		let parameter;
		if (system)
		{
			if (system.parameters)
			{
				parameter = system.parameters[parameterName];
				if (parameter === undefined)
				{
					console.error(new Error(`${parameterName} does not exist in system ${systemName}. Is it set to be external?`));
				}
			}
		}
		else
		{
			console.error(new Error(`${systemName} does not exist in configuration. Is it set to be external?`));
		}

		return parameter !== undefined
			? this.convertType(parameter, defaultValue)
			: defaultValue;
	}

	private static convertType<T>(input: string, defaultVal: T)
	{
		let output: any = null;
		switch (typeof defaultVal)
		{
			case "boolean": output = input === "true";
				break;
			case "number": output = Number(input);
				break;
			case "string": output = input;
				break;
			default:
				throw new TypeError(`Cannot convert value ${input} to type ${typeof defaultVal}`);
		}

		return output as T;
	}
}