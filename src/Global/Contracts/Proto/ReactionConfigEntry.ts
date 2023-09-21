import { Field, Message, Type } from 'protobufjs';

@Type.d("ReactionConfigEntry")
export class ReactionConfigEntry extends Message<ReactionConfigEntry>
{
	@Field.d(1, "string", "required")
	public Reaction: string;

	@Field.d(2, "string", "required")
	public Display: string;
}