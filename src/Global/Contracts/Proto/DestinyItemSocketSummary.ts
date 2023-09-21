import { Nullish } from "Global/EBS/Util/TypesUtil";
import { Field, Message, Type } from "protobufjs";
import { DestinyReusablePlugSummary } from "./DestinyReusablePlugSummary";

@Type.d("DestinyItemSocketSummary")
export class DestinyItemSocketSummary extends Message<DestinyItemSocketSummary>
{
	@Field.d(1, "uint32", "required")
	public PlugHash: number;

	@Field.d(2, DestinyReusablePlugSummary, "repeated")
	public ReusablePlugs: DestinyReusablePlugSummary[] | Nullish;
}