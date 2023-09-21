import classNames from "classnames";
import { DestinyItemSummary } from "Global/Contracts/Proto/DestinyItemSummary";
import React from "react";
import { ItemSummary } from "UI/Destiny/Items/ItemSummary";
import { DestinySubclassSummary } from '../../../../Global/Contracts/Proto/DestinySubclassSummary';
import { Nullish } from '../../../../Global/EBS/Util/TypesUtil';
import { armorBucketHashesOrdered, subclassBucketHash, weaponBucketHashesOrdered } from '../../../../Global/Utils/DefinitionUtils';
import styles from "./Equipment.module.scss";

interface IEquipmentProps
{
	className?: string;
	equipment: DestinyItemSummary[] | Nullish;
	subclassSummary: DestinySubclassSummary | undefined;
}

export const Equipment: React.FC<IEquipmentProps> = ({
	className,
	equipment,
	subclassSummary
}) =>
{
	const subclass = equipment?.find(itemSummary => itemSummary.BucketHash === subclassBucketHash);
	const weapons = weaponBucketHashesOrdered.map(bucketHash => equipment?.find(itemSummary => itemSummary.BucketHash === bucketHash)).filter(a => a !== undefined) as DestinyItemSummary[];
	const armor = armorBucketHashesOrdered.map(bucketHash => equipment?.find(itemSummary => itemSummary.BucketHash === bucketHash)).filter(a => a !== undefined) as DestinyItemSummary[];

	const containerClasses = classNames(className, styles.equipmentContainer);

	return (
		<div className={containerClasses}>
			<div className={classNames(styles.buckets, styles.subclass)}>
				{subclass && subclassSummary &&
					<ItemSummary
						className={styles.subclassItem}
						itemSummary={subclass}
						subclassSummary={subclassSummary}
						disableDetail={true}
					/>
				}
			</div>
			<div className={styles.weaponsAndArmor}>
				<div className={styles.bucketsWrapper}>
					<div className={classNames(styles.buckets, styles.weapons)}>
						{weapons?.map((itemSummary, i) => itemSummary && (
							<ItemSummary
								key={i}
								itemSummary={itemSummary}
							/>
						))}
					</div>
				</div>
				<div className={styles.bucketsWrapper}>
					<div className={classNames(styles.buckets, styles.armor)}>
						{armor?.map((itemSummary, i) => itemSummary && (
							<ItemSummary
								key={i}
								itemSummary={itemSummary}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}