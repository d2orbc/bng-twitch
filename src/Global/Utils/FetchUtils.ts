
export enum HttpStatusCodes
{
	OK = 200,
	Accepted = 202,
	NoContent = 204,
	MovedPermanently = 301,
	NotModified = 304,
	BadRequest = 400,
	Unauthorized = 401,
}

export class FetchUtils
{
	/**
	 * Fetches a URL, expecting JSON in return
	 * @param request
	 */
	public static FetchJson<T>(request: RequestInfo): Promise<T | null>
	{
		return fetch(request)
			.then(initialResponse =>
			{
				if (!initialResponse.ok)
				{
					throw initialResponse;
				}

				if (initialResponse.status === HttpStatusCodes.NoContent)
				{
					return Promise.resolve(null);
				}

				const jsonResponse = initialResponse.json().catch(e => console.error(e));

				return jsonResponse;
			});
	}

	/**
	 * Gets the properties of a request as an object, for stringification
	 * @param request
	 */
	public static RequestToObject(request: Request)
	{
		const {
			cache,
			credentials,
			destination,
			method,
			mode,
			redirect,
			referrer,
			url
		} = request;

		return {
			cache,
			credentials,
			destination,
			method,
			mode,
			redirect,
			referrer,
			url
		};
	}
}