import { ErrorDataStore } from "Global/DataStore/ErrorDataStore";
import GlobalLoadingDataStore from "Global/DataStore/GlobalLoadingDataStore";
import { ServiceError } from "Global/Utils/CustomErrors";
import { getBnetLocale } from "Global/Utils/Helpers";
import { Message } from "protobufjs";
import TwitchUserStateDataStore from "../DataStore/TwitchUserStateDataStore";
import { Environments } from "./ebs";
import { decodeProtobufMessage } from "./Util/ProtobufUtils";

enum HttpStatusCodes {
	OK = 200,
	Accepted = 202,
	NoContent = 204,
	MovedPermanently = 301,
	NotModified = 304,
	BadRequest = 400,
	Unauthorized = 401,
}

interface IFetchParams {
	options?: RequestInit;
	isJson?: boolean;
	isByteArray?: boolean;
}

export class ApiIntermediary {
	private static inFlight: { [url: string]: Promise<any> } = {};

	private static APIKey = "55a42aab81074075a0f5deebcb3e9f44";

	/**
	 * Creates a request and executes it
	 * @param urlPath The base path to hit
	 * @param urlRequiredParameters Any parameters that are required
	 * @param urlOptionalQueryAppend Optional url query string
	 * @param systemName The name of the system in the platform (used for analytics tracking)
	 * @param actionName The name of the action in the system (used for analytics tracking)
	 * @param input Any input required by the endpoint
	 * @param clientState State data that will be sent to the server and returned for client use
	 */
	public static doGetRequest<T = any>(env: keyof typeof Environments, urlPath: string, optionalUrlQuery?: string[], providedOptions?: IFetchParams): Promise<T> {
		return this.doRequest("GET", env, urlPath, null, optionalUrlQuery, providedOptions);
	}

	public static doEbsGetRequest<T extends Message<T>>(messageType: string, env: keyof typeof Environments, urlPath: string, optionalUrlQuery?: string[], providedOptions?: IFetchParams) {
		const twitchAuth = TwitchUserStateDataStore.state.twitchExtAuth;

		if (twitchAuth === null) {
			return Promise.reject("NOT READY");
		}

		const { token } = twitchAuth;

		const options = Object.assign(
			{},
			{
				options: {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
				isByteArray: true,
			},
			providedOptions
		);

		return ApiIntermediary.doGetRequest(env, urlPath, optionalUrlQuery, options).then((data) => {
			return new Promise<T>((resolve, reject) => {
				try {
					const decodedData = decodeProtobufMessage<T>(messageType, new Uint8Array(data));

					this.afterEbsRequestDecode(decodedData);

					resolve(decodedData);
				} catch (e) {
					reject(e);
				}
			});
		});
	}

	public static afterEbsRequestDecode(data: any) {
		if ("ErrorDetails" in data && data.ErrorDetails !== undefined && Object.keys(data.ErrorDetails).length > 0) {
			data.ErrorDetails.forEach((err) => ErrorDataStore.add(new ServiceError(err)));
		}
	}

	public static doEbsPostRequest<T extends Message | undefined>(
		messageType: string | undefined,
		env: keyof typeof Environments,
		urlPath: string,
		input: any,
		optionalUrlQuery?: string[],
		providedOptions?: IFetchParams
	): Promise<T | undefined> {
		const twitchAuth = TwitchUserStateDataStore.state.twitchExtAuth;

		if (twitchAuth === null) {
			return Promise.reject("NOT READY");
		}

		const { token } = twitchAuth;

		const options = Object.assign(
			{},
			{
				options: {
					headers: {
						Authorization: `Bearer ${token}`,
						"Content-Type": "application/json",
					},
				},
				isByteArray: true,
			},
			providedOptions
		);

		return ApiIntermediary.doPostRequest(env, urlPath, input, optionalUrlQuery, options).then((data) => {
			return new Promise<T | undefined>((resolve, reject) => {
				try {
					if (messageType) {
						const decodedData = decodeProtobufMessage<Message>(messageType, data) as T;

						this.afterEbsRequestDecode(decodedData);

						resolve(decodedData);
					} else 
					{
						resolve(undefined);
					}
				} catch (e) {
					reject(e);
				}
			});
		});
	}

	/**
	 * Creates a request and executes it
	 * @param urlPath The base path to hit
	 * @param urlRequiredParameters Any parameters that are required
	 * @param urlOptionalQueryAppend Optional url query string
	 * @param systemName The name of the system in the platform (used for analytics tracking)
	 * @param actionName The name of the action in the system (used for analytics tracking)
	 * @param input Any input required by the endpoint
	 * @param clientState State data that will be sent to the server and returned for client use
	 */
	public static doPostRequest(env: keyof typeof Environments, urlPath: string, input: any, optionalUrlQuery?: string[], providedOptions?: IFetchParams) {

		return this.doRequest("POST", env, urlPath, input, optionalUrlQuery, providedOptions);
	}

	private static doRequest(method: "GET" | "POST", env: keyof typeof Environments, endpoint: string, input: any, optionalUrlQuery?: string[], providedOptions?: IFetchParams) {
		const url = ApiIntermediary.buildUrl(env, endpoint, optionalUrlQuery);

		if (url in this.inFlight) {
			return this.inFlight[url];
		}

		const request = ApiIntermediary.buildRequest(url, method, input);

		const promise = ApiIntermediary.makeRequest(request, providedOptions).then((data) => {
			setTimeout(() => {
				delete this.inFlight[url];
			}, 250);

			return data;
		});

		this.inFlight[url] = promise;

		return promise;
	}

	public static buildUrlPath(env: keyof typeof Environments, endpoint: string) {
		return `${Environments[env]}${endpoint}`;
	}

	public static buildUrl(env: keyof typeof Environments, endpoint: string, more: string[] = []) {
		return `${this.buildUrlPath(env, endpoint)}/?lc=${getBnetLocale()}&${more.join("&")}`;
	}

	private static buildRequest(url: string, method: "GET" | "POST", input: any = null, clientState: any = null): Request {
		const requestInit: RequestInit = {
			method,
			cache: "default",
			headers: {
				"X-API-KEY": ApiIntermediary.APIKey,
			},
		};

		if (input) {
			requestInit.body = JSON.stringify(input);
		}

		const request = new Request(url, requestInit);

		return request;
	}

	public static makeRequest(request: RequestInfo, providedOptions?: IFetchParams) {
		// Bug 774817 - Edge does not send cookies in fetch requests unless you specifically tell it to

		const fetchOptions: RequestInit = Object.assign({}, providedOptions?.options, {
			credentials: "same-origin",
		} as RequestInit);

		const response = fetch(request, fetchOptions).then((initialResponse) => {
			if ((initialResponse.status === HttpStatusCodes.NoContent)) {
				return Promise.resolve();
			}

			if (initialResponse.status === HttpStatusCodes.Unauthorized) {
				return Promise.reject("You are not authorized to access this.");
			}

			let response: Promise<any>;
			if (providedOptions?.isJson) {
				response = initialResponse.json().catch((e) => console.error(e));
			} else if (providedOptions?.isByteArray) {
				response = initialResponse.arrayBuffer().catch((e) => console.error(e));

				if (initialResponse.status >= 200 && initialResponse.status <= 299) 
				{
					return Promise.resolve(response);
				}
			} else {
				response = initialResponse.text().catch((e) => console.error(e));
			}

			return response;
		});

		GlobalLoadingDataStore.triggerLoadEvent();

		return response;
	}
}
