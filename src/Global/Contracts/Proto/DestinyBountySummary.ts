import { Message, Field, Type } from "protobufjs";
import { DestinyObjectiveSummary } from './DestinyObjectiveSummary';

@Type.d("DestinyBountySummary")
export class DestinyBountySummary extends Message<DestinyBountySummary>
{
	@Field.d(1, "uint32", "required")
	public ItemHash: number;

	@Field.d(2, DestinyObjectiveSummary, "repeated")
	public Objectives: DestinyObjectiveSummary[] | null;

	@Field.d(3, "bool", "required")
	public Completed: boolean;

	@Field.d(4, "bool", "required")
	public Redeemed: boolean;
}