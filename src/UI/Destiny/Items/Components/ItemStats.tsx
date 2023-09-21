import classNames from "classnames";
import { IItemSummaryProps, ItemDefinitionFetcher } from "Global/Utils/DefinitionUtils";
import { useDefsEffect } from "Global/Utils/Helpers";
import React from "react";
import { builtAndInterpolateItemStat } from '../../../../Global/Utils/ItemStatsUtils';
import styles from "./ItemStats.module.scss";

/**
 * Renders an item's stat bar table
 */
const ItemStats: React.FC<IItemSummaryProps> = ({ itemSummary }) =>
{
	const defs = useDefsEffect(
		itemSummary,
		(oldVal, newVal) => oldVal?.ItemHash !== newVal.ItemHash,
		ItemDefinitionFetcher.create(itemSummary)
	);

	if (!defs)
	{
		return null;
	}

	const itemDef = defs.itemDef;
	const statGroupHash = itemDef?.stats?.statGroupHash ?? 0;
	const statGroupDef = defs.statGroupDefs?.[statGroupHash];
	const scaledStats = statGroupDef?.scaledStats;

	const statsRendered = scaledStats?.map(scaledStatDef =>
	{
		const matchingSummaryStat = itemSummary.Stats?.find(a => a.Hash === scaledStatDef.statHash);
		if (!matchingSummaryStat)
		{
			return null;
		}

		const statDef = defs.statDefs?.[scaledStatDef.statHash];
		if (!statDef)
		{
			return null;
		}

		const newStat = builtAndInterpolateItemStat(scaledStatDef.statHash, matchingSummaryStat.Value, scaledStatDef);

		const statMaximum = statGroupDef?.maximumValue ?? 100;
		const fillPct = Math.min(100, newStat.Value / statMaximum * 100);

		const statBarClasses = classNames(styles.statBar, { [styles.hasFill]: !scaledStatDef.displayAsNumeric });

		// Render these as a table so we can align the stat numbers and bars no matter what size they are
		return (
			<tr key={scaledStatDef.statHash}>
				<td>{statDef.displayProperties.name}</td>
				<td>
					<div className={statBarClasses}>
						<span>{newStat.Value}</span>
						{!scaledStatDef.displayAsNumeric &&
							<div className={styles.barFill} style={{ width: `${fillPct}%` }} data-value={newStat.Value} data-max={statMaximum} />
						}
					</div>
				</td>
			</tr>
		);
	});

	return (
		<table className={styles.stats}>
			<tbody>
				{statsRendered}
			</tbody>
		</table>
	);
}

export default ItemStats;