import { Field, Message, Type } from "protobufjs";
import { DestinyActiveCharacterSummary } from "../DestinyActiveCharacterSummary";

@Type.d("DestinyPlayerUpdateMessage")
export class DestinyPlayerUpdateMessage extends Message<DestinyPlayerUpdateMessage>
{
	@Field.d(1, DestinyActiveCharacterSummary, "required")
	public ActiveDestinyCharacter: DestinyActiveCharacterSummary;
}