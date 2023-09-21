import Long from "long";
import { Field, Message, Type } from 'protobufjs';
import { Nullish } from '../../EBS/Util/TypesUtil';
import { BroadcasterSystemStatus } from './Messages/BroadcasterSystemStatus';
import { DestinyPlayerUpdateMessage } from './Messages/DestinyPlayerUpdateMessage';
import { GlobalSystemStatus } from './Messages/GlobalSystemStatus';
import { ReactionConfigEntry } from './ReactionConfigEntry';

@Type.d("StreamerStateContract")
export class StreamerStateContract extends Message<StreamerStateContract>
{
	@Field.d(1, DestinyPlayerUpdateMessage, "optional")
	public PlayerStatus: DestinyPlayerUpdateMessage | Nullish;

	@Field.d(2, BroadcasterSystemStatus, "required")
	public unsafeBroadcasterSystemStatus: BroadcasterSystemStatus;

	@Field.d(3, GlobalSystemStatus, "required")
	public unsafeGlobalSystemStatus: GlobalSystemStatus;

	@Field.d(4, "bool", "required")
	public IsLinked: boolean;

	@Field.d(5, "int32", "optional")
	public LastSeenSecondsSinceEpoch: number | Nullish;

	@Field.d(6, ReactionConfigEntry, "repeated")
	public ValidReactions: ReactionConfigEntry[] | Nullish;

	@Field.d(7, "int64", "optional")
	public BnetMembershipId: Long | Nullish;
}