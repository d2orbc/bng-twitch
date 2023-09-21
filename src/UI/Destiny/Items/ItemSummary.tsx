import classNames from "classnames";
import { DestinySubclassSummary } from "Global/Contracts/Proto/DestinySubclassSummary";
import React, { useState } from "react";
import { Tooltip } from "UI/Controls/Tooltip";
import { DestinyItemSummary } from '../../../Global/Contracts/Proto/DestinyItemSummary';
import DetailDataStore from '../../../Global/DataStore/DetailDataStore';
import { ItemDefinitionFetcher } from '../../../Global/Utils/DefinitionUtils';
import { useDefsEffect } from '../../../Global/Utils/Helpers';
import ItemIcon from "./Components/ItemIcon";
import ItemDetails from "./ItemDetails";
import styles from "./ItemSummary.module.scss";
import { ItemTooltipContent } from "./Tooltip/ItemTooltipContent";

export interface IItemSummaryProps
{
	className?: string;
	itemSummary: DestinyItemSummary;
	subclassSummary?: DestinySubclassSummary;
	disableDetail?: boolean;
}

type Props = React.PropsWithChildren<IItemSummaryProps>;

/** Renders an item icon, with a tooltip */
export const ItemSummary: React.FC<Props> = (props: Props) =>
{
	const [tooltipVisible, setTooltipVisible] = useState(false);

	const defs = useDefsEffect(
		props,
		(oldProps, newProps) => oldProps?.itemSummary.ItemHash !== newProps.itemSummary.ItemHash,
		ItemDefinitionFetcher.create(props.itemSummary)
	);

	if (!defs)
	{
		return null;
	}

	const {
		itemDef
	} = defs;

	if (!itemDef)
	{
		return null;
	}

	let onItemClick: (() => void) | undefined = undefined;
	if (!props.disableDetail)
	{
		onItemClick = () =>
		{
			setTooltipVisible(false);

			DetailDataStore.setDetail({
				title: itemDef?.displayProperties?.name,
				children: <ItemDetails itemSummary={props?.itemSummary} />
			});
		};
	}

	return (
		<React.Fragment>
			<div className={classNames(styles.wrapper, props.className)} onClick={onItemClick}>
				<ItemIcon
					onMouseOver={() => setTooltipVisible(true)}
					onMouseLeave={() => setTooltipVisible(false)}
					itemSummary={props.itemSummary}
					isSubclass={!!props.subclassSummary}
				/>
			</div>

			{
				props.subclassSummary &&
				<div className={styles.subclassInfo}>
				</div>
			}
			<Tooltip visible={tooltipVisible} position={"auto"} distance={20}>
				<ItemTooltipContent definitions={defs} itemSummary={props.itemSummary} />
			</Tooltip>
		</React.Fragment>
	);
}