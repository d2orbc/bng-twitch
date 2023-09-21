import { Message, Type, Field } from "protobufjs";

@Type.d("DestinyEnergySummary")
export class DestinyEnergySummary extends Message<DestinyEnergySummary>
{
	@Field.d(1, "uint32", "required")
	public EnergyTypeHash: number;

	@Field.d(2, "int32", "required")
	public Capacity: number;

	@Field.d(3, "int32", "required")
	public Used: number;
}