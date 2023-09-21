import { Message, Type, Field } from "protobufjs";
import { Nullish } from "Global/EBS/Util/TypesUtil";

@Type.d("DestinyObjectiveSummary")
export class DestinyObjectiveSummary extends Message<DestinyObjectiveSummary>
{
	@Field.d(1, "uint32", "required")
	public ObjectiveHash: number;

	@Field.d(2, "int32", "optional")
	public Progress: number | Nullish;

	@Field.d(3, "int32", "optional")
	public CompletionValue: number;

	@Field.d(4, "bool", "required")
	public Completed: boolean;
}