import { Nullish } from 'Global/EBS/Util/TypesUtil';
import Long from 'long';
import { Field, Message, Type } from 'protobufjs';
import { PlatformType } from './PlatformType';
import { ViewerBountyStatus } from './ViewerBountyStatus';

@Type.d("ViewerStateContract")
export class ViewerStateContract extends Message<ViewerStateContract>
{
	@Field.d(1, "bool", "required")
	public IsLinked: boolean;

	@Field.d(2, ViewerBountyStatus, "repeated")
	public ViewerBountyStatus: ViewerBountyStatus[] | Nullish;

	@Field.d(3, PlatformType, "repeated")
	public Platforms: PlatformType[] | Nullish;

	@Field.d(4, "bool", "optional")
	public IsCrossSaved: boolean | Nullish;

	@Field.d(5, PlatformType, "optional")
	public ChosenPlatform: PlatformType | Nullish;
	
	@Field.d(6, "int64", "optional")
	public BnetMembershipId: Long | Nullish;

	@Field.d(7, "bool", "optional")
	public RequiresLogin: boolean | Nullish;
}