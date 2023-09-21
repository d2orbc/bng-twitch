import { DestinyItemSummary } from "Global/Contracts/Proto/DestinyItemSummary";
import { ItemDefinitionFetcher } from "Global/Utils/DefinitionUtils";
import { BnetImage, useDefsEffect } from "Global/Utils/Helpers";
import React from "react";
import { ItemIconBasic } from "./ItemIconBasic";

interface IItemIconProps extends React.HTMLProps<HTMLDivElement>
{
	itemSummary: DestinyItemSummary;
	isSubclass?: boolean;
	hidePrimaryStat?: boolean;
}

/** Fetch an item's definitions and render its icon */
const ItemIcon: React.FC<IItemIconProps> = ({
	className,
	itemSummary,
	isSubclass,
	hidePrimaryStat,
	...rest
}) =>
{
	const defs = useDefsEffect(
		itemSummary,
		(oldVal, newVal) => oldVal?.ItemHash !== newVal.ItemHash,
		ItemDefinitionFetcher.create(itemSummary)
	);

	if (!defs || !defs.itemDef)
	{
		return null;
	}

	return (
		<ItemIconBasic
			iconPath={BnetImage(defs.itemDef.displayProperties.icon)}
			statNumber={hidePrimaryStat ? undefined : itemSummary?.PrimaryStat?.Value}
			className={className}
			isSubclass={isSubclass}
			{...rest}
		/>
	);
}

export default ItemIcon;