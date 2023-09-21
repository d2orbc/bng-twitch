import React from "react";
import { StringUtils } from "Global/Utils/StringUtils";
import { getBnetLocale } from '../Utils/Helpers';
import { StringCompareOptions } from '../Utils/StringUtils';
import { Nullish } from "Global/EBS/Util/TypesUtil";

declare let __localizer: any;
declare let __localizer_en: any;

type FancyLocalizerDict = {
	CurrentCultureName?: string;
	CurrentCultureSpecific?: string;
	LocInherit?: "True" | "False";
	Format: (val: string, params: { [key: string]: any }) => string;
	FormatReact: (val: string, params: { [key: string]: React.ReactNode }) => React.ReactNode;
	[key: string]: any;
};

const curly = new RegExp("{([a-z0-9]+)}", "gi");
const dollar = /\$\$([a-z0-9]+)\$\$/gi;

const format = (localizationString: string, replaceWith: any): string => 
{
	let regexToUse: RegExp | Nullish = null,
		formattedString = localizationString;

	if (formattedString.match(curly))
	{
		regexToUse = curly;
	}
	else if (formattedString.match(dollar))
	{
		regexToUse = dollar;
	}

	if (regexToUse)
	{
		let match: RegExpExecArray | null;
		// tslint:disable-next-line: no-conditional-assignment
		do
		{
			match = regexToUse.exec(localizationString);
			if (match)
			{
				const replaceThis = match[0];
				const replaceKey = match[1];

				if (replaceWith[replaceKey] !== undefined)
				{
					formattedString = formattedString.replace(replaceThis, replaceWith[replaceKey]);
				}
			}
		}
		while (match);
	}

	return formattedString;
};

const formatReact = (localizationString: string, replaceWith: any): React.ReactNode => 
{
	let regexToUse: RegExp | Nullish = null;

	if (localizationString.match(curly))
	{
		regexToUse = curly;
	}
	else if (localizationString.match(dollar))
	{
		regexToUse = dollar;
	}

	let result: React.ReactNode = localizationString;
	if (regexToUse)
	{
		const parts = localizationString.split(regexToUse);

		const resultParts = parts.map((part, i) =>
		{
			let resultPart = part;
			if (replaceWith && part in replaceWith)
			{
				resultPart = replaceWith[part];
			}

			return <React.Fragment key={i}>{resultPart}</React.Fragment>;
		});

		result = (
			resultParts
		);
	}

	return result;
};

const localizerProxy: Partial<FancyLocalizerDict> = new Proxy({}, {
	get(_, propName: string, __)
	{
		const fileName = propName.toLowerCase();

		if (typeof __localizer !== "undefined"
			&& fileName in __localizer
			&& typeof __localizer[fileName] !== "object")
		{
			return __localizer[fileName];
		}

		if (StringUtils.equals(fileName, "CurrentCultureName", StringCompareOptions.IgnoreCase))
		{
			return getBnetLocale();
		}

		if (StringUtils.equals(fileName, "ValidLocales", StringCompareOptions.IgnoreCase))
		{
			return __localizer.validLocales;
		}

		if (StringUtils.equals(fileName, "Format", StringCompareOptions.IgnoreCase)
			|| StringUtils.equals(fileName, "fnStringReplace", StringCompareOptions.IgnoreCase))
		{
			return new Proxy(format, {
				apply(target, thisArg, argumentsList)
				{
					return target(argumentsList[0], argumentsList[1]);
				}
			});
		}

		if (StringUtils.equals(fileName, "FormatReact", StringCompareOptions.IgnoreCase))
		{
			return new Proxy(formatReact, {
				apply(target, thisArg, argumentsList)
				{
					return target(argumentsList[0], argumentsList[1]);
				}
			});
		}

		const fallbackEnabled = true;
		const fileProxy = new Proxy({}, {
			get(___, stringName: string, ____): string
			{
				let returnable: string | undefined;
				const fileStrings = __localizer[fileName];
				if (stringName === "__all")
				{
					return fileStrings;
				}

				const fileStringsEn = __localizer_en[fileName];
				const fixedStringName = stringName.toLowerCase();
				if (fileStrings)
				{
					const innerValue: string = fileStrings[fixedStringName];
					if (innerValue !== undefined)
					{
						returnable = innerValue;
					}
					else if (fallbackEnabled) // In production, use English strings as fallback
					{
						returnable = fileStringsEn[fixedStringName];
					}
				}

				if (returnable === undefined)
				{
					returnable = `##${fileName}.${stringName}##`;
				}


				return returnable;
			}
		});

		return fileProxy;
	}
});

export const Localizer: FancyLocalizerDict = localizerProxy as FancyLocalizerDict;