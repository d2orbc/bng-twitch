// tslint:disable: max-classes-per-file
// Disabling max-classes because this file is specifically meant to include a lot of them

import { IServiceErrorDetail } from '../Contracts/Proto/ServiceErrorDetail';
import { Localizer } from "../Localizer/Localizer";

/**
 * A special error with a title and a message
 * */
export class DetailedError extends Error
{
	public logTitle: string;
	public logMessage: string;
	public logDetail: any[];
	public readonly detail: any[];

	constructor(public readonly title: string, public readonly message: string, ...detail: any[])
	{
		super(message);

		this.logTitle = title;
		this.logMessage = message;
		this.detail = detail;
		this.logDetail = detail;

		Object.setPrototypeOf(this, DetailedError.prototype);
	}
}

export class NotFoundError extends DetailedError
{
	constructor()
	{
		super("Content Not Found", "The requested content does not exist");

		Object.setPrototypeOf(this, NotFoundError.prototype);
	}
}

export class ServiceError extends DetailedError
{
	constructor(public readonly serviceErrorDetail: IServiceErrorDetail, public readonly preventClose = false)
	{
		super(Localizer.Twitchext.Error, Localizer.Format(Localizer.TwitchExt[serviceErrorDetail.ErrorStringKey], serviceErrorDetail.ErrorStringParams ?? {}));

		Object.setPrototypeOf(this, ServiceError.prototype);
	}
}