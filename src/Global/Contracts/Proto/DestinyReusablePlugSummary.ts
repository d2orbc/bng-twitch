import { Message, Field, Type } from "protobufjs";

@Type.d("DestinyReusablePlugSummary")
export class DestinyReusablePlugSummary extends Message<DestinyReusablePlugSummary>
{
	@Field.d(1, "uint32", "required")
	public PlugHash: number;

	@Field.d(2, "bool", "required")
	public CanInsert: number;
}