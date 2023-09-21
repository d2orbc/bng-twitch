import { DestinyItemSummary } from '../../../Global/Contracts/Proto/DestinyItemSummary';
import React from 'react';
import ItemPrimaryStat from './Components/ItemPrimaryStat';
import ItemStats from './Components/ItemStats';
import ItemPlugs from './Components/ItemPlugs';
import styles from "./ItemDetails.module.scss";
import ItemScreenshot from './Components/ItemScreenshot';

interface IItemDetailsProps
{
	className?: string;
	itemSummary: DestinyItemSummary;
}

const ItemDetails: React.FC<IItemDetailsProps> = ({ itemSummary }) =>
{

	return (
		<div className={styles.itemDetail}>
			<ItemScreenshot itemSummary={itemSummary} />
			<ItemPrimaryStat itemSummary={itemSummary} />
			<ItemStats itemSummary={itemSummary} />
			<ItemPlugs itemSummary={itemSummary} />
		</div>
	);
}

export default ItemDetails;