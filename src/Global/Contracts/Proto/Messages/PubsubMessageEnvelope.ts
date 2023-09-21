import { Field, Message, Type } from "protobufjs";

export type ValidMessages = "DestinyPlayerUpdateMessage" | "DestinyStreamEndMessage" | "DestinyStreamStartMessage" | "GiftsubRewardMessage" | "BroadcasterSystemStatus" | "GlobalSystemStatus" | "DestinyActivityEndMessage";

@Type.d("PubsubMessageEnvelope")
export class PubsubMessageEnvelope extends Message<PubsubMessageEnvelope>
{
	@Field.d(1, "string", "required")
	public MessageType: ValidMessages;

	@Field.d(2, "bytes", "required")
	public Payload: Uint8Array;
}