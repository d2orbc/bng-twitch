import React from "react";
import styles from "./ItemTooltipContent.module.scss";
import classNames from "classnames";
import { IItemSummaryPropsWithDefinitions } from '../../../../Global/Utils/DefinitionUtils';
import ItemPrimaryStat from "../Components/ItemPrimaryStat";
import ItemPlugs from "../Components/ItemPlugs";
import ItemStats from "../Components/ItemStats";
import { TierType } from "Global/Contracts/BnetPlatform.TSEnum";

export const ItemTooltipContent: React.FC<IItemSummaryPropsWithDefinitions> = ({ itemSummary, definitions }) =>
{
	const tierType = definitions?.itemDef?.inventory?.tierType ?? TierType.Basic;
	const headerClasses = classNames(styles.header, styles[TierType[tierType]]);

	const {
		itemDef
	} = definitions;

	const displayProperties = definitions.itemDef?.displayProperties;

	return (
		<div className={styles.wrapper}>
			<div className={headerClasses}>
				<div className={styles.title}>{displayProperties?.name}</div>
				<div className={styles.subtitle}>{itemDef?.itemTypeAndTierDisplayName}</div>
			</div>
			<div className={styles.body}>
				<ItemPrimaryStat itemSummary={itemSummary} />
				<ItemStats itemSummary={itemSummary} />
				<ItemPlugs itemSummary={itemSummary} summarizePlugs={true} />
			</div>
		</div>
	);
};

