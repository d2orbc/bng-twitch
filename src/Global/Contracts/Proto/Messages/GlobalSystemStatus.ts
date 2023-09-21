import { Field, Message, Type } from 'protobufjs';

@Type.d("GlobalSystemStatus")
export class GlobalSystemStatus extends Message<GlobalSystemStatus> implements ISystemStatus
{
	@Field.d(1, "bool", "required")
	public Extension: boolean;

	@Field.d(2, "bool", "required")
	public Destiny: boolean;

	@Field.d(3, "bool", "required")
	public StatusUpdates: boolean;

	@Field.d(4, "bool", "required")
	public GiftSubscriptions: boolean;

	@Field.d(5, "bool", "required")
	public Reactions: boolean;
}

/** Ensure that we match the Message to the PubSubDataStore always */
export interface ISystemStatus
{
	Extension: boolean;
	Destiny: boolean;
	StatusUpdates: boolean;
	GiftSubscriptions: boolean;
	Reactions: boolean;
}