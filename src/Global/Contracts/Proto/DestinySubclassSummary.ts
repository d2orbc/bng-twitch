import { Message, Type, Field } from "protobufjs";
import { Nullish } from 'Global/EBS/Util/TypesUtil';

@Type.d("DestinySubclassSummary")
export class DestinySubclassSummary extends Message<DestinySubclassSummary>
{
	@Field.d(1, "uint32", "required")
	public ItemHash: number;

	@Field.d(2, "uint32", "required")
	public GridHash: number;

	@Field.d(3, "int32", "repeated")
	public ActiveNodes: number[] | Nullish;
}