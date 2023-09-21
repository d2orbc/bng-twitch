import { Nullish } from "Global/EBS/Util/TypesUtil";
import Long from "long";
import { Field, Message, Type } from "protobufjs";
import { DestinyBountySummary } from "./DestinyBountySummary";
import { DestinyHashValue } from './DestinyHashValue';
import { DestinyItemSummary } from "./DestinyItemSummary";
import { DestinyMetric } from "./DestinyMetric";
import { DestinySubclassSummary } from "./DestinySubclassSummary";
import { DestinyTrialsTicket } from "./DestinyTrialsTicket";

@Type.d("DestinyActiveCharacterSummary")
export class DestinyActiveCharacterSummary extends Message<DestinyActiveCharacterSummary>
{
	@Field.d(1, "string", "optional", "Test")
	public DisplayName: string | Nullish;

	@Field.d(2, "string", "required")
	public PlatformType: string;

	@Field.d(3, "uint32", "required")
	public EmblemHash: number;

	@Field.d(4, "uint32", "optional")
	public ActivityHash: number | Nullish;

	@Field.d(5, "uint32", "optional")
	public PlaylistActivityHash: number | Nullish;

	@Field.d(6, "int32", "optional")
	public ActivityStartSecondsSinceEpoch: number | Nullish;

	@Field.d(7, DestinyHashValue, "repeated")
	public CharacterStats: DestinyHashValue[] | Nullish;

	@Field.d(8, "int32", "optional")
	public Score: number | Nullish;

	@Field.d(9, "uint32", "required")
	public RaceHash: number;

	@Field.d(10, "uint32", "required")
	public GenderHash: number;

	@Field.d(11, "uint32", "required")
	public ClassHash: number;

	@Field.d(12, "uint32", "required")
	public Level: number;

	@Field.d(13, "uint32", "optional")
	public TitleRecordHash: number | Nullish;

	@Field.d(14, DestinySubclassSummary, "required")
	public Subclass: DestinySubclassSummary;

	@Field.d(15, DestinyBountySummary, "repeated")
	public Bounties: DestinyBountySummary[] | Nullish;

	@Field.d(16, DestinyItemSummary, "repeated")
	public Equipment: DestinyItemSummary[] | Nullish;

	@Field.d(17, DestinyTrialsTicket, "optional")
	public DestinyTrialsTicket: DestinyTrialsTicket | Nullish;

	@Field.d(18, DestinyMetric, "repeated")
	public Metrics: DestinyMetric[] | Nullish;

	@Field.d(19, "int64", "optional")
	public CharacterId: Long | Nullish;

	@Field.d(20, "uint32", "optional")
	public LastValidPlaylistActivityHash: number | Nullish;

	@Field.d(21, "uint32", "optional")
	public LastValidActivityHash: number | Nullish;

	@Field.d(22, "bool", "optional")
	public IsPlayingTrials: boolean | Nullish
}