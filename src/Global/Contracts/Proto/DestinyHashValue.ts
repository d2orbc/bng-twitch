import { Field, Message, Type } from "protobufjs";

@Type.d("DestinyHashValue")
export class DestinyHashValue extends Message<DestinyHashValue> implements IDestinyHashValue
{
	@Field.d(1, "uint32", "required")
	public Hash: number;

	@Field.d(2, "int32", "required")
	public Value: number;	
}

export interface IDestinyHashValue
{
	Hash: number;
	Value: number;
}