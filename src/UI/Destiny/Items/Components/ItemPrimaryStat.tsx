import classNames from "classnames";
import { DestinyEnergyType } from "Global/Contracts/BnetPlatform.TSEnum";
import { armorBucketHashesOrdered, IItemSummaryProps, ItemDefinitionFetcher } from "Global/Utils/DefinitionUtils";
import { BnetImage, useDefsEffect } from "Global/Utils/Helpers";
import React from "react";
import styles from "./ItemPrimaryStat.module.scss";

const ItemPrimaryStat: React.FC<IItemSummaryProps> = ({ itemSummary }) =>
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

	const {
		energyDef
	} = defs;

	const isArmor = armorBucketHashesOrdered.includes(itemSummary.BucketHash);
	const energyType = energyDef?.enumValue ?? DestinyEnergyType.Any;
	const energyTypeClassname = styles[DestinyEnergyType[energyType]];

	return (
		<div className={styles.primaryStatWrapper}>
			{isArmor &&
				<React.Fragment>
					<div className={styles.primaryStat}>
						{itemSummary.PrimaryStat?.Value}
					</div>
					<div className={styles.primaryStatMeta}>
						{energyDef?.displayProperties?.icon &&
							<img width={40} src={BnetImage(energyDef?.displayProperties?.icon)} alt={energyDef?.displayProperties?.name} />
						}
					</div>
				</React.Fragment>
			}

			{!isArmor &&
				<React.Fragment>
					<div className={styles.primaryStatMeta}>
						{energyDef?.displayProperties?.icon &&
							<img width={40} src={BnetImage(energyDef?.displayProperties?.icon)} alt={energyDef?.displayProperties?.name} />
						}
					</div>
					<div className={classNames(styles.primaryStat, energyTypeClassname)}>
						{itemSummary.PrimaryStat?.Value}
					</div>
				</React.Fragment>
			}
		</div>
	);
}

export default ItemPrimaryStat;