import { DateTime } from 'luxon';
import ReactGA from "react-ga";
import EBS from '../EBS/ebs';
import { ConfigUtils } from "./ConfigUtils";
import { initGtm } from "./gtm";
import { SessionStorageUtils } from "./StorageUtils";
import { StringUtils } from "./StringUtils";


interface ISession
{
	sessionId: string;
	refreshDate: DateTime;
}

export class AnalyticsUtils
{
	private static initSuccess = false;

	public static initOnce()
	{
		if (AnalyticsUtils.initSuccess)
		{
			return;
		}

		const reactGaTestMode = EBS.env !== "prod";
		const useGaScript = EBS.env === "prod";

		ReactGA.initialize("UA-5262186-14", {
			testMode: reactGaTestMode,
			debug: reactGaTestMode
		});

		initGtm(useGaScript);

		AnalyticsUtils.initSuccess = true;
	}

	/** Tracks the current page to Google Analytics */
	public static trackPage()
	{
		AnalyticsUtils.initOnce();

		ReactGA.pageview(window.location.pathname + window.location.search);

		AnalyticsUtils.trackSession();
	}

	public static trackSession()
	{
		const timeout = ConfigUtils.GetParameter("SessionTracking", "SessionTimeoutSeconds", 1800);

		const existingSessionItem = SessionStorageUtils.getItem("Session");
		if (existingSessionItem)
		{
			const now = DateTime.local();
			const existingSessionObj = JSON.parse(existingSessionItem);
			const existingSession: ISession = {
				sessionId: existingSessionObj.sessionId,
				refreshDate: DateTime.fromISO(existingSessionObj.refreshDate)
			};

			if (existingSession.refreshDate < now.plus({ seconds: -timeout }))
			{
				this.createOrUpdateSession();
			}
			else
			{
				this.createOrUpdateSession(existingSession.sessionId);
			}
		}
		else
		{
			this.createOrUpdateSession();
		}
	}

	private static createOrUpdateSession(existingSessionId?: string)
	{
		const newSession: ISession = {
			sessionId: existingSessionId || StringUtils.generateGuid(),
			refreshDate: DateTime.local()
		};

		SessionStorageUtils.setItem("Session", JSON.stringify(newSession));
	}
}