import EBS from '../EBS/ebs';

let forceEnableLog = false;

window["enableLogging"] = () => { forceEnableLog = true };

const LoggerSettings = {
	get LoggingEnabled()
	{
		return !EBS.env.startsWith("prod") || forceEnableLog;
	}
}

/** 
 * Logs a message when logging is enabled.
 * NOTE: To enable logging in production:
 * 		1. Open Chrome Dev tools
 * 		2. Go to Console
 * 		3. In the console top bar, look for a dropdown menu that is probably set to "top"
 * 		4. Set the menu to "video_overlay.html"
 * 		5. In the console, run `enableLogging()`
 */
export const LogMessage = (...p: any[]) =>
{
	if (LoggerSettings.LoggingEnabled)
	{
		let args = [...p];
		let title = "";

		if(typeof p[0] === "string")
		{
			args = p.slice(1);
			title = p[0];
		}

		console.log(`[Destiny 2 Extension]: ${title}`, args);
	}
}