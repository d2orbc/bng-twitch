import { DestinyBreakerTypeDefinition, DestinyClassDefinition, DestinyDamageTypeDefinition, DestinyEnergyTypeDefinition, DestinyGenderDefinition, DestinyInventoryBucketDefinition, DestinyInventoryItemDefinition, DestinyMetricDefinition, DestinyObjectiveDefinition, DestinyProgressionDefinition, DestinyRaceDefinition, DestinySandboxPerkDefinition, DestinySocketCategoryDefinition, DestinyStatDefinition, DestinyStatGroupDefinition, DestinyTalentGridDefinition, DestinyWorldDefinitionsTypeMap } from 'Global/Contracts/BnetPlatform.TSDefinitions';
import { DestinyActiveCharacterSummary } from "Global/Contracts/Proto/DestinyActiveCharacterSummary";
import { DestinyItemSummary } from "Global/Contracts/Proto/DestinyItemSummary";
import { DestinyMetric } from "Global/Contracts/Proto/DestinyMetric";
import { DestinyTrialsTicket } from "Global/Contracts/Proto/DestinyTrialsTicket";
import { ViewerBountyStatus } from "Global/Contracts/Proto/ViewerBountyStatus";
import Platform from '../EBS/Platform';

/**
 * THIS FILE:
 * Does all of the fetching of definitions from Bungie.net
 */

export interface IItemDefinitions
{
	itemDef?: DestinyInventoryItemDefinition | undefined;
	bucketDef?: DestinyInventoryBucketDefinition | undefined;
	damageTypeDef?: DestinyDamageTypeDefinition | undefined;
	breakerTypeDef?: DestinyBreakerTypeDefinition | undefined;
	energyDef?: DestinyEnergyTypeDefinition | undefined;
	primaryStatDef?: DestinyStatDefinition | undefined;
	plugDefs: { [key: number]: DestinyInventoryItemDefinition };
	statDefs: { [key: number]: DestinyStatDefinition };
	statGroupDefs: { [key: number]: DestinyStatGroupDefinition };
	talentGridDefs: { [key: number]: DestinyTalentGridDefinition };
	socketCategoryDefs: { [key: number]: DestinySocketCategoryDefinition };
}

export const subclassBucketHash = 3284755031;

export const weaponBucketHashesOrdered = [
	1498876634, // Kinetic
	2465295065, // Energy
	953998645, // Heavy
] as const;

export const armorBucketHashesOrdered = [
	3448274439, // Helmets
	3551918588, // Arms,
	14239492, // Chest
	20886954, // Legs
	1585787867 // Class
];

export const powerLevelHash = 1935470627;

export interface IItemSummaryProps
{
	itemSummary: DestinyItemSummary;
}

export interface IItemSummaryPropsWithDefinitions extends IItemSummaryProps
{
	definitions: IItemDefinitions;
}

/** Contains the shareable code for fetching definitions for any given situation. Given logic for determining which definitions to fetch, it can fetch and store them. */
export abstract class DefinitionFetcher<IReturnType, IArgType>
{
	protected defs: IReturnType;

	protected constructor(protected arg: IArgType, initialDefs: IReturnType)
	{
		this.defs = initialDefs;
	}

	protected setDef(p: Partial<IReturnType>)
	{
		this.defs = {
			...this.defs,
			...p
		} as IReturnType;
	}

	protected getDef<T extends keyof DestinyWorldDefinitionsTypeMap>(entityType: T, itemHash: number, success: (def: DestinyWorldDefinitionsTypeMap[T]) => void): Promise<any>
	{
		return Platform.getDestinyDefinition(entityType, itemHash)
			.then(def => def && success(def))
			.catch(e =>
			{
				//ignore
			});
	}

	public async fetch(): Promise<IReturnType>
	{
		const definedPromises = this.createPromises()?.filter(a => a !== undefined) as Promise<any>[];

		await Promise.all(definedPromises);

		return this.defs;
	}

	protected abstract createPromises(): (Promise<any> | undefined)[];
}

export class ItemDefinitionFetcher extends DefinitionFetcher<IItemDefinitions, DestinyItemSummary>
{
	public static create = (item: DestinyItemSummary) =>
		new ItemDefinitionFetcher(item, {
			breakerTypeDef: undefined,
			bucketDef: undefined,
			damageTypeDef: undefined,
			energyDef: undefined,
			itemDef: undefined,
			primaryStatDef: undefined,
			plugDefs: {},
			statDefs: {},
			statGroupDefs: {},
			socketCategoryDefs: {},
			talentGridDefs: {}
		}).fetch();

	protected createPromises()
	{
		const item = this.arg;

		const promises = [
			this.getDef("DestinyInventoryItemDefinition", item.ItemHash, def =>
			{
				this.setDef({ itemDef: def });

				if (def?.stats?.statGroupHash !== undefined)
				{
					const postItemDefFetchedPromises: Promise<any>[] = [
						this.getDef("DestinyStatGroupDefinition", def.stats.statGroupHash,
							statGroupDef => this.defs.statGroupDefs[def.stats.statGroupHash as number] = statGroupDef!)
					];

					postItemDefFetchedPromises.push(...def?.sockets?.socketCategories?.map(
						cat => this.getDef("DestinySocketCategoryDefinition", cat.socketCategoryHash,
							categoryDef => this.defs.socketCategoryDefs[cat.socketCategoryHash] = categoryDef!)
					) ?? []);

					// Only fetch a talent grid for the subclass
					if (def?.talentGrid?.buildName)
					{
						postItemDefFetchedPromises.push(
							this.getDef("DestinyTalentGridDefinition", def.talentGrid?.talentGridHash,
								talentGridDef => this.defs.talentGridDefs[def.talentGrid?.talentGridHash as number] = talentGridDef!)
						);
					}

					return Promise.all(postItemDefFetchedPromises);
				}
			}),
			this.getDef("DestinyInventoryBucketDefinition", item.BucketHash,
				def => this.setDef({ bucketDef: def })),
			item.BreakerTypeHash
				? this.getDef("DestinyBreakerTypeDefinition", item.BreakerTypeHash,
					def => this.setDef({ breakerTypeDef: def }))
				: undefined,
			item.DamageTypeHash
				? this.getDef("DestinyDamageTypeDefinition", item.DamageTypeHash,
					def => this.setDef({ damageTypeDef: def }))
				: undefined,
			item.Energy?.EnergyTypeHash
				? this.getDef("DestinyEnergyTypeDefinition", item.Energy.EnergyTypeHash,
					def => this.setDef({ energyDef: def }))
				: undefined,
			item.PrimaryStat?.Hash
				? this.getDef("DestinyStatDefinition", item.PrimaryStat?.Hash,
					def => this.setDef({ primaryStatDef: def }))
				: undefined,
		];

		if (item.Sockets)
		{
			const socketPromises = item.Sockets.map(socket => this.getDef("DestinyInventoryItemDefinition", socket.PlugHash,
				def => this.defs.plugDefs[socket.PlugHash] = def!));
			promises.push(...socketPromises);
		}

		if (item.Stats)
		{
			const statPromises = item.Stats.map(stat => this.getDef("DestinyStatDefinition", stat.Hash,
				def => this.defs.statDefs[stat.Hash] = def!));
			promises.push(...statPromises);
		}

		return promises;
	}
}

export interface INameplateDefinitions
{
	emblemDef: DestinyInventoryItemDefinition | undefined;
	genderDef: DestinyGenderDefinition | undefined;
	classDef: DestinyClassDefinition | undefined;
	raceDef: DestinyRaceDefinition | undefined;
}

export class NameplateDefinitionFetcher extends DefinitionFetcher<INameplateDefinitions, DestinyActiveCharacterSummary>
{
	public static create = (character: DestinyActiveCharacterSummary) =>
		new NameplateDefinitionFetcher(character, {
			classDef: undefined,
			emblemDef: undefined,
			genderDef: undefined,
			raceDef: undefined
		}).fetch();

	protected createPromises(): (Promise<any> | undefined)[]
	{
		const character = this.arg;

		const promises = [
			this.getDef("DestinyInventoryItemDefinition", character.EmblemHash,
				emblemDef => this.setDef({ emblemDef })),
			this.getDef("DestinyClassDefinition", character.ClassHash,
				classDef => this.setDef({ classDef })),
			this.getDef("DestinyGenderDefinition", character.GenderHash,
				genderDef => this.setDef({ genderDef })),
			this.getDef("DestinyRaceDefinition", character.RaceHash,
				raceDef => this.setDef({ raceDef })),
		];

		return promises;
	}
}

export interface ITrialsTicketDefinitions
{
	ticketItem: DestinyInventoryItemDefinition | undefined;
	objectiveDefs: { [key: number]: DestinyObjectiveDefinition };
	perkDefs: { [key: number]: DestinySandboxPerkDefinition };
}

export class TrialsTicketDefinitionFetcher extends DefinitionFetcher<ITrialsTicketDefinitions, DestinyTrialsTicket>
{
	public static create = (ticket: DestinyTrialsTicket) =>
		new TrialsTicketDefinitionFetcher(ticket, {
			ticketItem: undefined,
			objectiveDefs: {},
			perkDefs: {}
		}).fetch();

	protected createPromises(): (Promise<any> | undefined)[]
	{
		const ticket = this.arg;

		const promises = [
			this.getDef("DestinyInventoryItemDefinition", ticket.TicketItemHash, ticketItem =>
			{
				this.setDef({ ticketItem });

				const objectivePromises = ticketItem?.objectives?.objectiveHashes?.map(objectiveHash =>
					this.getDef("DestinyObjectiveDefinition", objectiveHash,
						objectiveDef => this.defs.objectiveDefs[objectiveHash] = objectiveDef!)
				);

				const perkPromises = ticketItem?.perks?.map((perk): Promise<DestinySandboxPerkDefinition> =>
				{
					return this.getDef("DestinySandboxPerkDefinition", perk.perkHash,
						perkDef =>
						{

							/* This is where we add visibility to the perk definition and so we change the type to reflect the addition */
							if (perkDef) {
								perkDef["visible"] = perk.perkVisibility.valueOf() === 1;
							}

							return this.defs.perkDefs[perk.perkHash] = perkDef as DestinySandboxPerkDefinition;
						})
				}
				);

				return Promise.all<any>([...objectivePromises!, ...perkPromises!]);
			})
		];

		return promises;
	}
}

export interface IMetricWidgetDefinitions
{
	metrics: { [key: number]: DestinyMetricDefinition };
}

export class MetricWidgetDefinitionFetcher extends DefinitionFetcher<IMetricWidgetDefinitions, DestinyMetric[]>
{
	public static create = (metrics: DestinyMetric[]) =>
		new MetricWidgetDefinitionFetcher(metrics, {
			metrics: {}
		}).fetch();

	protected createPromises()
	{
		const metrics = this.arg;

		const promises = metrics.map(metric =>
			this.getDef("DestinyMetricDefinition", metric.MetricHash,
				metricDef => this.defs.metrics[metric.MetricHash] = metricDef!)
		);

		return promises;
	}
}

export interface IViewerBountyDefinitions
{
	bounties: { [key: number]: DestinyProgressionDefinition };
}

export class ViewerBountyDefinitionFetcher extends DefinitionFetcher<IViewerBountyDefinitions, ViewerBountyStatus[]>
{
	public static create = (bounties: ViewerBountyStatus[]) =>
		new ViewerBountyDefinitionFetcher(bounties, {
			bounties: {}
		}).fetch();

	protected createPromises(): (Promise<any> | undefined)[]
	{
		const bounties = this.arg;

		const promises = bounties.map(bounty =>
			this.getDef("DestinyProgressionDefinition", bounty.ProgressionHash,
				bountyDef => this.defs.bounties[bounty.ProgressionHash] = bountyDef!)
		);

		return promises;
	}
}