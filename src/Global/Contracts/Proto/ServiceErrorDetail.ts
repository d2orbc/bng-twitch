import { Field, MapField, Message, Type } from 'protobufjs';
import { Nullish } from '../../EBS/Util/TypesUtil';

@Type.d("ServiceErrorDetail")
export class ServiceErrorDetail extends Message<ServiceErrorDetail> implements IServiceErrorDetail
{
	@Field.d(1, "string", "optional")
	public ErrorStringKey: string;

	@MapField.d(2, "string", "string")
	public ErrorStringParams: {[key: string]: string} | Nullish;
}

export interface IServiceErrorDetail
{
	ErrorStringKey: string;
	ErrorStringParams?: {[key: string]: string} | Nullish;
}