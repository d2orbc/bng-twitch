import { DataStore } from "Global/DataStore/DataStore";
import { Localizer } from "./Localizer";
import EBS, { Environments } from '../EBS/ebs';
import { FetchUtils } from "Global/Utils/FetchUtils";
import { ApiIntermediary } from '../EBS/ApiIntermediary';

class StringFetcherInternal extends DataStore<{ loaded: boolean; started: boolean }>
{
	public static Instance = new StringFetcherInternal({ loaded: false, started: false });

	public fetch(force = false) 
	{
		if (!force && this.state.started)
		{
			return Promise.resolve();
		}

		this.update({ loaded: false, started: true });

		const loc = Localizer.CurrentCultureName;
		const lcin = "True";

		// Locally, we don't want to have to wait for the string cache to update
		const cacheString = EBS.env === "local"
			? Math.floor(Date.now() / (1000))
			: Math.floor(Date.now() / (1000 * 60));

		const englishJsonUrl = ApiIntermediary.buildUrlPath(`${EBS.env}Bnet` as keyof typeof Environments, `/JsonLocalizer.ashx?lc=en&lcin=${lcin}&nc=true&bv=${cacheString}`);
		const jsonUrl = ApiIntermediary.buildUrlPath(`${EBS.env}Bnet` as keyof typeof Environments, `/JsonLocalizer.ashx?lc=${loc}&lcin=${lcin}&nc=true&bv=${cacheString}`);

		const fetches = [
			FetchUtils.FetchJson(new Request(englishJsonUrl)),
			FetchUtils.FetchJson(new Request(jsonUrl))
		];
		
		return Promise.all(fetches)
			.then(data =>
			{
				const englishStrings = data[0];
				const locStrings = data[1];

				window["__localizer_en"] = englishStrings;
				window["__localizer"] = locStrings;
				this.update({ loaded: true });

				return;
			})
			.catch((e) =>
			{
				console.error(e);
				throw new Error(`Unable to load localization. Attempted to load ${Localizer.CurrentCultureName} strings.`);
			});
	}
}

export const StringFetcher = StringFetcherInternal.Instance;