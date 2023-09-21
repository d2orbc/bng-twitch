import { Field, Message, Type } from 'protobufjs';
import { Nullish } from '../../EBS/Util/TypesUtil';
import { ServiceErrorDetail } from './ServiceErrorDetail';
import { StreamerStateContract } from './StreamerStateContract';

@Type.d("StreamerStateResponse")
export class StreamerStateResponse extends Message<StreamerStateResponse>
{
	@Field.d(1, StreamerStateContract, "optional")
	public Response: StreamerStateContract | Nullish;

	@Field.d(2, ServiceErrorDetail, "repeated")
	public ErrorDetails: ServiceErrorDetail[] | Nullish;
}