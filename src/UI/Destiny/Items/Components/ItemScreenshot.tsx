import classNames from "classnames";
import { IItemSummaryProps, ItemDefinitionFetcher } from "Global/Utils/DefinitionUtils";
import { BnetImage, useDefsEffect } from "Global/Utils/Helpers";
import React from "react";
import ItemIcon from "./ItemIcon";
import styles from "./ItemScreenshot.module.scss";

interface IItemScreenshotProps extends IItemSummaryProps
{
	className?: string;
}

/**
 * Render an item's screenshot with the icon embedded
 */
const ItemScreenshot: React.FC<IItemScreenshotProps> = ({
	className,
	itemSummary
}) =>
{
	const defs = useDefsEffect(
		itemSummary,
		(oldVal, newVal) => oldVal?.ItemHash !== newVal.ItemHash,
		ItemDefinitionFetcher.create(itemSummary)
	);

	if (!defs?.itemDef)
	{
		return null;
	}

	return (
		<div
			className={classNames(className, styles.screenshot)}
			style={{
				backgroundImage: `url(${BnetImage(defs.itemDef.screenshot)})`
			}}
		>
			<ItemIcon
				className={styles.icon}
				itemSummary={itemSummary}
				hidePrimaryStat={true}
			/>
		</div>
	);
};

export default ItemScreenshot;