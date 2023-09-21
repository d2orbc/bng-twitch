import { Message, Type, Field } from "protobufjs";
import { DestinyHashValue } from './DestinyHashValue';
import { DestinyEnergySummary } from "./DestinyEnergySummary";
import { DestinyItemSocketSummary } from "./DestinyItemSocketSummary";
import { Nullish } from "Global/EBS/Util/TypesUtil";

@Type.d("DestinyItemSummary")
export class DestinyItemSummary extends Message<DestinyItemSummary>
{
	@Field.d(1, "uint32", "required")
	public ItemHash: number;

	@Field.d(2, "uint32", "required")
	public BucketHash: number;

	@Field.d(3, "bool", "required")
	public Masterworked: boolean;

	@Field.d(4, "uint32", "optional")
	public StyleItemHash: number | Nullish;

	@Field.d(5, "uint32", "optional")
	public DamageTypeHash: number | Nullish;

	@Field.d(6, "uint32", "optional")
	public BreakerTypeHash: number | Nullish;

	@Field.d(7, DestinyEnergySummary, "optional")
	public Energy: DestinyEnergySummary | Nullish;

	@Field.d(8, DestinyHashValue, "optional")
	public PrimaryStat: DestinyHashValue | Nullish;

	@Field.d(9, DestinyItemSocketSummary, "repeated")
	public Sockets: DestinyItemSocketSummary[] | Nullish;

	@Field.d(10, DestinyHashValue, "repeated")
	public Stats: DestinyHashValue[] | Nullish;
}