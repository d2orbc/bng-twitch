import { Field, Message, Type } from 'protobufjs';

@Type.d("ViewerBountyStatus")
export class ViewerBountyStatus extends Message<ViewerBountyStatus>
{
	@Field.d(1, "uint32", "required")
	public ProgressionHash: number;

	@Field.d(2, "int32", "required")
	public Progress: number;

	@Field.d(3, "int32", "required")
	public CompletionGoalValue: number;

	@Field.d(4, "bool", "required")
	public IsCompleted: boolean;

	@Field.d(5, "bool", "required")
	public IsRedeemed: boolean;

	@Field.d(6, "int32", "optional")
	public ProgressNextAvailableSecondsSinceEpoch: number;
}