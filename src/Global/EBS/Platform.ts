import { DestinyWorldDefinitionsTypeMap } from "Global/Contracts/BnetPlatform.TSDefinitions";
import { ApiIntermediary } from './ApiIntermediary';
import { Environments } from "./ebs";

declare const __ENVIRONMENT__;

const cachedDefinitions: { [k in keyof DestinyWorldDefinitionsTypeMap]?: { [key: number]: any } } = {};

class Platform
{
	public static Instance = new Platform(__ENVIRONMENT__);

	private constructor(public readonly env: keyof typeof Environments)
	{

	}

	/**
	 * Returns a definition of the requested type. These are cached in `cachedDefinitions` above.
	 * @param entityType
	 * @param itemHash 
	 */
	public getDestinyDefinition<T extends keyof DestinyWorldDefinitionsTypeMap>(entityType: T, itemHash: number): Promise<DestinyWorldDefinitionsTypeMap[T] | undefined>
	{
		if (typeof itemHash === "undefined" || itemHash === 0)
		{
			return Promise.resolve(undefined);
		}

		const cachedDefinition = cachedDefinitions[entityType]?.[itemHash];
		if (cachedDefinition)
		{
			return Promise.resolve(cachedDefinition) as Promise<DestinyWorldDefinitionsTypeMap[T]>;
		}

		return ApiIntermediary.doGetRequest(
			`${this.env}Bnet` as keyof typeof Environments,
			`/Platform/Destiny2/Manifest/${encodeURIComponent(entityType)}/${encodeURIComponent(itemHash)}`,
			undefined,
			{
				isJson: true
			})
			.then(data =>
			{
				return new Promise<T>((resolve, reject) =>
				{
					if (data?.Response)
					{
						// Fetch from the cache if there, otherwise download it.
						let cachedByType = cachedDefinitions[entityType];
						if (!cachedByType)
						{
							cachedDefinitions[entityType] = {};
							cachedByType = cachedDefinitions[entityType];
						}

						cachedByType![itemHash] = data?.Response;

						resolve(data?.Response);
					}
					else
					{
						reject(`Data invalid for ${entityType}:${itemHash}`);
					}
				});
			}) as Promise<DestinyWorldDefinitionsTypeMap[T]>;
	}

	private getPlatformData<T>(url: string, errorMessage: string)
	{
		return ApiIntermediary.doGetRequest(
			`${this.env}Bnet` as keyof typeof Environments,
			url,
			undefined,
			{
				isJson: true
			})
			.then(data =>
			{
				return new Promise<T>((resolve, reject) =>
				{
					if (data?.Response)
					{
						resolve(data?.Response as T);
					}
					else
					{
						reject(errorMessage);
					}
				});
			});
	}

	/** Gets core settings */
	public getWebmaster(): Promise<CoreSettingsConfiguration>
	{
		return this.getPlatformData<CoreSettingsConfiguration>(`/Platform/Settings`, "Unable to load settings");
	}

	/** Gets Bnet membership info */
	public getStreamerBnetInfo(membershipId: string)
	{
		return this.getPlatformData<GeneralUser>(`/Platform/User/GetBungieNetUserById/${membershipId}`, "Unable to fetch streamer's Bungie.net information");
	}
}

export default Platform.Instance;