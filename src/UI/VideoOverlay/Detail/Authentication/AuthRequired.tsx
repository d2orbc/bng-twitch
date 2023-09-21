import { Environments } from "Global/EBS/ebs";
import { Localizer } from "Global/Localizer/Localizer";
import React, { useState } from "react";
import { Button } from "UI/Controls/Button";
import PubSubDataStore from '../../../../Global/DataStore/PubSubDataStore';
import TwitchUserStateDataStore, { ITwitchUserStateDataStorePayload } from '../../../../Global/DataStore/TwitchUserStateDataStore';
import ViewerStateDataStore from '../../../../Global/DataStore/ViewerStateDataStore';
import EBS from '../../../../Global/EBS/ebs';
import { useMountEffect } from '../../../../Global/Utils/Helpers';
import styles from "./AuthRequired.module.scss";
import PlatformsRequired from "./PlatformRequired";
import { AuthUtils } from "./AuthUtils";

interface IAuthRequiredProps
{
	hideTitle?: boolean;
	isConfig: boolean;
}

/** Handles all forms of authentication requirements, including Bungie.net linking, Twitch auth, Twitch permissions, etc. */
const AuthRequired: React.FC<IAuthRequiredProps> = ({
	isConfig,
	hideTitle,
	children
}) =>
{
	const [viewerState, setViewerState] = useState(ViewerStateDataStore.state);
	const [twitchUserState, setTwitchUserState] = useState(TwitchUserStateDataStore.state);
	const [pubSubData, setPubSubData] = useState(PubSubDataStore.state);

	useMountEffect(() =>
	{
		const destroys = [
			ViewerStateDataStore.observe(setViewerState),
			TwitchUserStateDataStore.observe(setTwitchUserState),
			PubSubDataStore.observe(setPubSubData),
		];

		return () => destroys.forEach(d => d());
	});

	const onPlatformChoice = () =>
	{
		ViewerStateDataStore.refresh();
	};

	let renderable = children;

	const streamerMustLink = !pubSubData.streamerIsLinked || pubSubData.systemStatus.StreamerMustReauth;

	const showLinkageUi = (isConfig && streamerMustLink)
		|| (!isConfig && !viewerState.status?.Response?.IsLinked);

	// Shown if the viewer needs to log in to twitch
	if (!twitchUserState.viewerLoggedInToTwitch)
	{
		renderable = (
			<RequiresTwitchAuth twitchUserState={twitchUserState} />
		);
	}
	// Shown if the viewer needs to select a platform (and if this is the Video Overlay)
	else if (!isConfig && viewerState.status?.Response?.IsLinked && !viewerState?.status?.Response?.ChosenPlatform && !EBS.MOCK)
	{
		renderable = (
			<PlatformsRequired
				platformChoices={viewerState?.status?.Response?.Platforms}
				onPlatformChoice={onPlatformChoice}
			/>
		);
	}
	// Shown if we need the viewer to grant permission for us to read their Twitch ID
	else if (twitchUserState.requiresViewerPermission)
	{
		renderable = (
			<RequiresTwitchPerms />
		);
	}
	// Shown if we determine the user (viewer if VideoOverlay, streamer if Config) needs to link their Twitch account to Bungie.net
	else if (showLinkageUi)
	{
		renderable = (
			<NotLinked hideTitle={hideTitle} onConnectClick={() => AuthUtils.openAuthLinkWindow(isConfig)} isConfig={isConfig} />
		);
	}

	return <>
		{renderable}
	</>;
}

const learnMoreUrl = `${Environments[EBS.env + "Bnet"]}/${Localizer.CurrentCultureName}/twitch-ext/help`;

interface INotLinkedProps
{
	isConfig: boolean;
	hideTitle?: boolean;
	onConnectClick: () => void;
}

const NotLinked: React.FC<INotLinkedProps> = ({
	onConnectClick,
	isConfig,
	hideTitle
}) =>
{
	const message = isConfig
		? Localizer.Twitchext.StreamerConnectTwitch
		: Localizer.Twitchext.ConnectYourTwitchAccount;

	return (
		<div className={styles.authContent}>
			{!hideTitle &&
				<h2 className={styles.bungieLogo} style={{ backgroundImage: `url(bungie_logo.png)` }}>
					{Localizer.Twitchext.ConnectBungieNet}
				</h2>
			}
			<p>{message}</p>
			<div className={styles.actions}>
				<Button buttonType={"gold"} size={"Medium"} className={styles.unlinkedButton} onClick={onConnectClick}>{Localizer.Twitchext.Connect}</Button>
				<Button className={styles.unlinkedButton} size={"Medium"} url={learnMoreUrl}>{Localizer.Twitchext.LearnMore}</Button>
			</div>
		</div>
	);
}

const RequiresTwitchAuth: React.FC<{ twitchUserState: ITwitchUserStateDataStorePayload }> = ({
	twitchUserState
}) =>
{
	return (
		<div className={styles.authContent}>
			<h2 className={styles.bungieLogo} />

			{!twitchUserState.viewerLoggedInToTwitch && (
				<p>{Localizer.Twitchext.SignIntoTwitchToUnlock}</p>
			)}

			<div className={styles.actions}>
				{!twitchUserState.viewerLoggedInToTwitch && (
					<Button className={styles.unlinkedButton} size={"Medium"} url={learnMoreUrl}>
						{Localizer.Twitchext.LearnMore}
					</Button>
				)}

			</div>
		</div>

	);
}

const RequiresTwitchPerms: React.FC = () =>
{
	const buttonClick = () =>
	{
		Twitch.ext.actions.requestIdShare();
	};

	const permissionMessage = Localizer.Format(Localizer.Twitchext.GrantPermissionDescription, {
		extensionName: Localizer.Twitchext.ExtensionName
	});

	return (
		<div className={styles.authContent}>
			<h2 className={styles.bungieLogo} />

			<p>{permissionMessage}</p>

			<div className={styles.actions}>
				<Button className={styles.unlinkedButton} size={"Medium"} onClick={buttonClick}>
					{Localizer.Twitchext.GrantPermission}
				</Button>
			</div>
		</div>

	);
}

export default AuthRequired;