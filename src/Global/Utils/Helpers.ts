import { Nullish } from 'Global/EBS/Util/TypesUtil';
import querystring from "query-string";
import { useEffect, useRef, useState } from 'react';
import PubSubDataStore, { IPubSubDataStorePayload } from '../DataStore/PubSubDataStore';
import EBS, { Environments } from '../EBS/ebs';
import { ConfigUtils } from './ConfigUtils';

// Locales supported by Bungie.net
const bnetLocales = ["de", "es", "es-mx", "fr", "it", "ja", "ko", "pl", "pt-br", "ru", "zh-chs", "zh-cht", "en"] as const;
// Locales supported by Twitch
const twitchLocales = ["en", "da", "de", "en-gb", "es", "es-mx", "fr", "it", "hu", "nl", "no", "pl", "pt", "pt-br", "ro", "sk", "fi", "sv", "vi", "tr", "cs", "el", "bg", "ru", "th", "zh-cn", "zh-tw", "ja", "ko"] as const;

type TwitchLocaleKeys = keyof typeof twitchLocales;
export type ValidTwitchLocales = typeof twitchLocales[TwitchLocaleKeys];

type BnetLocaleKeys = keyof typeof bnetLocales;
type ValidBnetLocales = typeof bnetLocales[BnetLocaleKeys];

// The list of locales that Bungie.net doesn't support but Twitch does
type TwitchLocalesMissingFromBnet = Exclude<ValidTwitchLocales, ValidBnetLocales>;

export interface ITwitchClientParams
{
	anchor: "component" | "panel" | "video_overlay";
	language: string;
	locale: ValidTwitchLocales;
	mode: "config" | "dashboard" | "viewer";
	platform: "mobile" | "web";
	popout: boolean;
	state: "testing" | "hosted_test" | "approved" | "released" | "ready_for_review" | "in_review" | "pending_action" | "uploading";
}

export const useMountEffect = (func: () => void) => useEffect(func, []);

/** Allows access to previous values in functional components. To use, just pass any useState variable into this and you'll get back out the previous state.
 * e.g.
 * const [favoriteColor, setFavoriteColor] = useState("red");
 * const previousFavorite = usePrevious(favoriteColor);
 * setFavoriteColor("blue"); // favoriteColor = blue, previousFavorite = red
 */
export const usePrevious = <T>(value: T) =>
{
	const ref = useRef<T>();
	useEffect(() =>
	{
		ref.current = value;
	});
	return ref.current;
}

/**
 * Check if input has changed, and if so, fetch new definitions
 * @param currentValue The value of the variable from which we are deriving definitions (usually the object that has the hashes we are using to fetch things)
 * @param shouldFetch A function that decides whether we need new definitions
 * @param fetchDefinitions A function that does the fetching and returns the new state of definitions
 */
export const useDefsEffect = <TDefs, TComparator>(
	currentValue: TComparator,
	shouldFetch: (oldValue: TComparator | undefined, currentValue: TComparator) => boolean,
	fetchDefinitions: Promise<TDefs>
) =>
{
	const [
		defs,
		setDefs
	] = useState<TDefs | Nullish>(null);

	const oldValue = usePrevious(currentValue);

	useEffect(() =>
	{
		if (shouldFetch(oldValue, currentValue))
		{
			fetchDefinitions.then(defs => setDefs(defs));
		}
	});

	return defs;
}

/** Prepends the appropriate environment host to the relative path */
export const BnetImage = (relativePath: string) => `${Environments[EBS.env + "Bnet"]}/${relativePath}`;

/** Returns the parameters that Twitch gives us in the IFrame's URL as an object */
export const getTwitchClientParams = () =>
{
	return querystring.parse(window.location.search, {
		parseBooleans: true,
		parseNumbers: true
	}) as any as ITwitchClientParams;
}

/** Get the current Bungie.net locale from the current Twitch locale, replacing any unsupported values with the appropriate Bungie.net locale */
export const getBnetLocale = (): ValidBnetLocales =>
{
	const currentContextLanguage = PubSubDataStore.state.twitchContext?.language;
	const currentParams = getTwitchClientParams();
	const {
		locale,
		language: langFromParams
	} = currentParams;


	const language = langFromParams ?? currentContextLanguage;

	let result: ValidBnetLocales = "en";

	if ((bnetLocales as any as string[]).includes(language))
	{
		result = language as ValidBnetLocales;
	}
	else
	{
		switch (locale as TwitchLocalesMissingFromBnet)
		{
			case "pt":
				result = "en";
				break;
			case "zh-cn":
				result = "zh-chs";
				break;
			case "zh-tw":
				result = "zh-cht";
				break;
		}
	}

	return result;
}

export const ExtensionEnabled = (pubsubData: IPubSubDataStorePayload) =>
{
	return pubsubData.systemStatus.Extension
		&& pubsubData.systemStatus.StatusUpdates
		&& pubsubData.streamerIsLinked !== undefined
		&& ConfigUtils.SystemStatus("Destiny2TwitchExtUI");
}