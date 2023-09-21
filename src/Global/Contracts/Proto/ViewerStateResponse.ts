import { Field, Message, Type } from 'protobufjs';
import { Nullish } from '../../EBS/Util/TypesUtil';
import { ServiceErrorDetail } from './ServiceErrorDetail';
import { ViewerStateContract } from './ViewerStateContract';

@Type.d("ViewerStateResponse")
export class ViewerStateResponse extends Message<ViewerStateResponse>
{
	@Field.d(1, ViewerStateContract, "optional")
	public Response: ViewerStateContract | Nullish;

	@Field.d(2, ServiceErrorDetail, "repeated")
	public ErrorDetails: ServiceErrorDetail[] | Nullish;
}