import { Field, Message, Type, MapField } from "protobufjs";
import { ISystemStatus } from "./GlobalSystemStatus";
import { Nullish } from "Global/EBS/Util/TypesUtil";

@Type.d("BroadcasterSystemStatus")
export class BroadcasterSystemStatus extends Message<BroadcasterSystemStatus> implements IInclusiveSystemStatus {
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

	@Field.d(6, "bool", "optional")
	public StreamerMustReauth: boolean;

	@MapField.d(7, "string", "string")
	public Settings: ISettings | Nullish;
}

export interface IInclusiveSystemStatus extends ISystemStatus {
	StreamerMustReauth: boolean;
}

export type HorizontalPositionTypes = "left" | "right";
export type VerticalPositionTypes = "top" | "center" | "bottom";

export interface ISettings {
	horizontalPos: HorizontalPositionTypes;
	verticalPos: VerticalPositionTypes;
}

export const DefaultSystemStatus: IInclusiveSystemStatus = {
	Destiny: true,
	Extension: true,
	GiftSubscriptions: true,
	Reactions: true,
	StatusUpdates: true,
	StreamerMustReauth: false,
};
