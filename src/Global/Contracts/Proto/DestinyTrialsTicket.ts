import { Message, Type, Field } from "protobufjs";

@Type.d("DestinyTrialsTicket")
export class DestinyTrialsTicket extends Message<DestinyTrialsTicket>
{
	@Field.d(1, "uint32", "required")
	public TicketItemHash: number;

	@Field.d(2, "int32", "required")
	public WinCount: number;

	@Field.d(3, "int32", "required")
	public LossCount: number;

	@Field.d(4, "bool", "required")
	public IsLossForgivenessApplicable: boolean;

	@Field.d(5, "bool", "required")
	public LossForgivenessUsed: boolean;
}