import { Message, Type, Field } from "protobufjs";

@Type.d("DestinyMetric")
export class DestinyMetric extends Message<DestinyMetric>
{
	@Field.d(1, "uint32", "required")
	public MetricHash: number;

	@Field.d(2, "int32", "required")
	public MetricValue: number;
}