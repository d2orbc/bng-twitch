import { InterpolationPoint } from "Global/Contracts/BnetPlatform.TSDefinitions";
import { IDestinyHashValue } from "Global/Contracts/Proto/DestinyHashValue";
import { DestinyStatDisplayDefinition } from '../Contracts/BnetPlatform.TSDefinitions';

/**
 * THIS FILE PORTED FROM InterpolationUtilities.cs IN BungieNet.Engine
 */


 
export const builtAndInterpolateItemStat = (statHash: number, statValue: number, statDef: DestinyStatDisplayDefinition) =>
{
	const stat = buildPrecomputed(statHash, statValue);

	// Note that, in investment (c_investment_stats_interface::stat_group_convert_investment_to_display()),
	// a real32_integer_round is performed: theoretically it performs the same operation as Math.Round.
	// In practice, some platforms may round differently, but in practice they do not. (verified by ewill after a long email exchange, 2014-10-08)
	stat.Value = lerpAndRoundValue(statValue, statDef.displayInterpolation);

	return stat;
}

const buildPrecomputed = (statHash: number, statValue: number) =>
{
	const newStat: IDestinyHashValue = {
		Hash: statHash,
		Value: statValue
	};

	return newStat;
}

const lerpAndRoundValue = (sourceValue: number, interpolationTable?: InterpolationPoint[]) =>
{
	return Math.round(lerpValue(sourceValue, interpolationTable));
}

const lerpValue = (sourceValue: number, interpolationTable?: InterpolationPoint[]) =>
{
	let result = 0;

	if (!interpolationTable || interpolationTable.length === 0)
	{
		return result;
	}

	if (interpolationTable.length === 1)
	{
		// If there's only one value in the interpolation table, the display stat
		// will ALWAYS be that value.
		result = interpolationTable[0].weight;
	}
	else
	{
		// If there's more than one value, do the traditional interpolation.

		// Make sure the source value is between the absolute minimum and maximum source values.
		const interpolationCount = interpolationTable.length;
		const pinnedSourceValue = pinValue(
			sourceValue,
			interpolationTable[0].value,
			interpolationTable[interpolationCount - 1].value);
			
		// If the value is at the minimum possible value, set it to the minimum possible weight.
		if (pinnedSourceValue <= interpolationTable[0].value)
		{
			result = interpolationTable[0].weight;
		}
		else if (pinnedSourceValue >= interpolationTable[interpolationCount - 1].value)
		{
			// Also, if it's at the maximum possible value, set it to the maximum possible weight.
			result = interpolationTable[interpolationCount - 1].weight;
		}
		else
		{
			// If it's somewhere in-between the minimum and maximum possible value, interpolate.
			for (let interpolationTableIndex = 1; interpolationTableIndex < interpolationCount; interpolationTableIndex++)
			{
				const lowPoint = interpolationTable[interpolationTableIndex - 1];
				const highPoint = interpolationTable[interpolationTableIndex];

				// Note that the high point in the formula used by Investment for interpolation is EXCLUSIVE,
				// and the low point is INCLUSIVE.  See cseries_macros.h, IN_RANGE_ARRAY macro
				if (pinnedSourceValue >= lowPoint.value && pinnedSourceValue < highPoint.value)
				{
					// Calculate the value's distance between the low and high value as a fraction.
					const fractionOfHighValue = getFractionOfValueRange(lowPoint.value, highPoint.value, pinnedSourceValue);

					// Interpolate the weights by that fraction to get the weighted number result.
					result = interpolate(lowPoint.weight, highPoint.weight, fractionOfHighValue);
				}
			}
		}
	}

	return result;
}

const pinValue = (
	inputValue: number,
	minimum: number,
	maximum: number) =>
{
	return Math.min(Math.max(inputValue, minimum), maximum);
}

const getFractionOfValueRange = (
	lowValue: number,
	highValue: number,
	targetValue: number) =>
{
	return (targetValue - lowValue) / (highValue - lowValue);
}

const interpolate = (
	lowValue: number,
	highValue: number,
	scale: number) =>
{
	return lowValue + ((highValue - lowValue) * scale);
}