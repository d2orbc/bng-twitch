import classNames from "classnames";
import { DestinyInventoryItemDefinition } from "Global/Contracts/BnetPlatform.TSDefinitions";
import { DestinySocketCategoryStyle } from "Global/Contracts/BnetPlatform.TSEnum";
import { DestinyItemSummary } from "Global/Contracts/Proto/DestinyItemSummary";
import { IItemDefinitions, IItemSummaryProps, ItemDefinitionFetcher } from "Global/Utils/DefinitionUtils";
import { BnetImage, useDefsEffect } from "Global/Utils/Helpers";
import React from "react";
import { DestinyItemSocketSummary } from '../../../../Global/Contracts/Proto/DestinyItemSocketSummary';
import styles from "./ItemPlugs.module.scss";
import { Localizer } from "Global/Localizer/Localizer";

interface IItemPlugsProps extends IItemSummaryProps
{
	/** If true, only show the plugs that are traits & intrinsic */
	summarizePlugs?: boolean;
}

const socketCategoryStyleOrder: DestinySocketCategoryStyle[] = [
	DestinySocketCategoryStyle.EnergyMeter,
	DestinySocketCategoryStyle.Intrinsic,
	DestinySocketCategoryStyle.Consumable,
	DestinySocketCategoryStyle.LargePerk,
	DestinySocketCategoryStyle.Reusable,
	DestinySocketCategoryStyle.Unknown,
	DestinySocketCategoryStyle.Unlockable
];

/** Returns the socket categories for a given plugDefs list */
const getSocketCategoriesForPlugMap = (defs: IItemDefinitions, itemSummary: DestinyItemSummary, plugDefs: DestinyInventoryItemDefinition[]) =>
{

	let socketMap: { [key: number]: DestinyInventoryItemDefinition[] } = {};

	const plugDefList = Object.values(plugDefs);

	const socketsShown = plugDefList
		.map(plugDef => itemSummary?.Sockets?.find(socket => socket.PlugHash === plugDef.hash))
		.filter(a => a !== undefined) as DestinyItemSocketSummary[];

	socketsShown.forEach((socket, i) =>
	{
		const socketIndex = itemSummary?.Sockets?.indexOf(socket) ?? -1;
		const socketCategoriesMatched = defs.itemDef?.sockets?.socketCategories.filter(cat => cat.socketIndexes.includes(socketIndex)) ?? [];

		socketCategoriesMatched.forEach(category =>
		{

			const socketEntries = category.socketIndexes.map(a => defs?.itemDef?.sockets?.socketEntries[a]);
			const isVisible = socketEntries.every(a => a?.defaultVisible) ?? false;
			const existingMapForHash = socketMap[category.socketCategoryHash] ?? [];

			if (isVisible)
			{
				socketMap[category.socketCategoryHash] = [...existingMapForHash, defs?.plugDefs?.[socket.PlugHash]];
			}
		})
	});

	return socketMap;
}

const ItemPlugs: React.FC<IItemPlugsProps> = ({
	itemSummary,
	summarizePlugs
}) =>
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

	let plugDefs = itemSummary?.Sockets
		?.map(plug => defs.plugDefs?.[plug.PlugHash])
		?.filter(plugDef => !!plugDef) ?? [];

	if (summarizePlugs)
	{
		plugDefs = plugDefs?.filter(plugDef => plugDef.itemTypeDisplayName === "Trait" || plugDef.itemTypeDisplayName === "Intrinsic") ?? [];
	}

	const shownSocketCategories = getSocketCategoriesForPlugMap(defs, itemSummary, plugDefs);
	const socketCategoryHashes = Object.keys(shownSocketCategories).sort((a, b) =>
	{
		const sortOrder = socketCategoryStyleOrder.indexOf(defs.socketCategoryDefs[Number(b)]?.categoryStyle) - socketCategoryStyleOrder.indexOf(defs.socketCategoryDefs[Number(a)]?.categoryStyle);
		
		return sortOrder;
	});
	const hasMultipleSocketCategories = socketCategoryHashes.length > 1;

	if (plugDefs.length === 0)
	{
		return null;
	}

	const armorTierCategoryHash = 760375309;

	const getIconImageForEnergyType = (energyType: number) =>
	{
		const solarIcon = `/img/destiny_content/damage_types/destiny2/thermal_trans.png`;
		const arcIcon = `/img/destiny_content/damage_types/destiny2/arc_trans.png`;
		const voidIcon = `/img/destiny_content/damage_types/destiny2/void_trans.png`;

		switch (energyType)
		{
			case 1:
				return arcIcon;

			case 2:
				return solarIcon;

			case 3:
				return voidIcon;

			default:
				return solarIcon;
		}
	};

	const energyString = Localizer.Twitchext.Energy;

	const getCapacityBars = (capacityValue: number) =>
	{
		const capacity = [1,2,3,4,5,6,7,8,9,10];
		return capacity.map(value =>
		{
			return <div key={value} className={classNames(styles.capacityItem, { [styles.capacityItemUsed]: value < capacityValue + 1 })}></div>
		});
	};

	const getEnergyBackground = (energyType: number) =>
	{
		switch (energyType)
		{
			case 1:
				return `#85C5EC`;
			case 2:
				return `#F2721B`;
			case 3:
				return `#B184C5`;
		}
	}

	return (
		<div className={styles.plugs}>
			{
				//isArmorUpgrade 
			}
			{socketCategoryHashes.filter(categoryHash => categoryHash === armorTierCategoryHash.toString()).map(categoryHash => (
				<div className={styles.plugCategory} key={categoryHash}>
					{hasMultipleSocketCategories && defs?.socketCategoryDefs?.[categoryHash] && defs?.socketCategoryDefs?.[categoryHash]?.displayProperties?.name && (
						<div className={styles.plugCategoryLabel}>
							{defs?.socketCategoryDefs?.[categoryHash]?.displayProperties?.name}
						</div>
					)}
					<div className={styles.armorTier}>
						{shownSocketCategories[categoryHash].map(plugDef => plugDef.displayProperties && (
							<React.Fragment>
								{plugDef?.plug?.energyCapacity &&
									<React.Fragment>
										<div className={styles.banner} style={{ backgroundColor: getEnergyBackground(plugDef.plug.energyCapacity.energyType) }}>
											<div className={styles.bannerIcon} style={{ backgroundImage: `url(${BnetImage(getIconImageForEnergyType(plugDef.plug.energyCapacity.energyType))})` }} />
											<div className={styles.bannerValue}>{plugDef.plug.energyCapacity.capacityValue}</div>
											<div className={styles.bannerEnergy}>{energyString}</div>
										</div>
										<div className={styles.energyCapacity}>
											{getCapacityBars(plugDef.plug.energyCapacity.capacityValue)}
										</div>
									</React.Fragment>
								}
							</React.Fragment>
						))}
					</div>
				</div>
			))}

			{socketCategoryHashes.filter(categoryHash => categoryHash !== armorTierCategoryHash.toString()).map(categoryHash => (
				<div className={styles.plugCategory} key={categoryHash}>
					{hasMultipleSocketCategories && defs?.socketCategoryDefs?.[categoryHash] && defs?.socketCategoryDefs?.[categoryHash]?.displayProperties?.name && (
						<div className={styles.plugCategoryLabel}>
							{defs?.socketCategoryDefs?.[categoryHash]?.displayProperties?.name}
						</div>
					)}
					<div>
						{shownSocketCategories[categoryHash].map(plugDef => plugDef.displayProperties && (
							<div key={plugDef.hash} className={classNames(styles.plug, { [styles.intrinsic]: plugDef.itemTypeDisplayName === "Intrinsic" })}>
								<div className={styles.plugIcon} style={{
									backgroundImage: `url(${BnetImage(plugDef.displayProperties.icon)})`
								}} />
								<div className={styles.plugContent}>
									<div className={styles.plugTitle}>
										{plugDef.displayProperties.name}
									</div>
									{plugDef.itemTypeDisplayName === "Intrinsic" &&
										<div className={styles.plugSubtitle}>
											{plugDef.displayProperties.description}
										</div>
									}
								</div>
							</div>
						))}
					</div>
				</div>
			))}

			
		</div>
	);
}

export default ItemPlugs;