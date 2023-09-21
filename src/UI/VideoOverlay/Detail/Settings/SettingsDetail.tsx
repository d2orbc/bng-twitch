import classNames from "classnames";
import { SettingsDataStore } from "Global/DataStore/SettingsDataStore";
import { Localizer } from "Global/Localizer/Localizer";
import { useMountEffect } from "Global/Utils/Helpers";
import React, { useState } from "react";
import ReactGA from "react-ga";
import { FiToggleLeft, FiToggleRight } from "react-icons/fi";
import PubSubDataStore from "../../../../Global/DataStore/PubSubDataStore";
import { ISettingsDataStoreToggles } from "../../../../Global/DataStore/SettingsDataStore";
import StreamerStateDataStore from "../../../../Global/DataStore/StreamerStateDataStore";
import TwitchUserStateDataStore from "../../../../Global/DataStore/TwitchUserStateDataStore";
import ViewerStateDataStore from "../../../../Global/DataStore/ViewerStateDataStore";
import styles from "./SettingsDetail.module.scss";

/** Renders the settings detail screen */
export const SettingsDetail: React.FC = () => {
	const [settings, setSettings] = useState(SettingsDataStore.state);
	const [pubsubData, setPubsubData] = useState(PubSubDataStore.state);
	const [viewerState, setViewerState] = useState(ViewerStateDataStore.state);
	const [streamerState, setStreamerState] = useState(StreamerStateDataStore.state);
	const [twitchUserState, setTwitchUserState] = useState(TwitchUserStateDataStore.state);
	const [debugToggleOn, setDebugToggleOn] = useState(false);

	useMountEffect(() => {
		ReactGA.pageview("/settings");

		const destroys = [
			SettingsDataStore.observe(setSettings),
			PubSubDataStore.observe(setPubsubData),
			ViewerStateDataStore.observe(setViewerState),
			StreamerStateDataStore.observe(setStreamerState),
			TwitchUserStateDataStore.observe(setTwitchUserState),
		];

		return () => destroys.forEach((d) => d());
	});

	const toggle = (name: keyof ISettingsDataStoreToggles) => {
		SettingsDataStore.setToggle(name, !settings.toggles[name]);
	};

	// Select the debug text on click
	const select = () => {
		const el = document.getElementById("debug") as Node;
		const range = document.createRange();
		range.selectNodeContents(el);
		const sel = window.getSelection();
		sel?.removeAllRanges();
		sel?.addRange(range);
	};

	const streamerBnetId = streamerState.status?.Response?.BnetMembershipId;
	const streamerCharacterId = pubsubData.playerData?.ActiveDestinyCharacter?.CharacterId;
	const streamerId = twitchUserState.twitchExtAuth?.channelId;

	const viewerBnetId = viewerState.status?.Response?.BnetMembershipId;
	const viewerPlatform = viewerState.status?.Response?.ChosenPlatform;
	const viewerOpaqueId = twitchUserState.twitchViewer?.opaqueId;
	const viewerGavePermission = JSON.stringify(!twitchUserState.requiresViewerPermission);
	const viewerId = twitchUserState.twitchViewer?.id;

	return (
		<div className={styles.wrapper}>
			<div>
				<Toggle on={settings.toggles.visualEffects} title={Localizer.Twitchext.SettingVisualEffects} onToggle={() => toggle("visualEffects")} />
			</div>

			<div>
				<Toggle on={debugToggleOn} title={Localizer.Twitchext.ShowDebugView} onToggle={() => setDebugToggleOn(!debugToggleOn)} />
			</div>
			<div className={styles.bottomArea}>
				{debugToggleOn && (
					<>
						<div className={styles.debug}>Debug</div>
						{/**
						 * Deciphering these values:
						 * S: Streamer
						 * V: Viewer
						 *
						 * Streamer { T = Twitch ID | B = Bungie.net Membership ID | C = Character ID}
						 * Viewer { B = Bungie.net Membership ID | P = Selected Platform | OT = Opaque ID + Permission Status | T = Twitch ID (if permission granted)}
						 */}
						<pre className={styles.userData} id="debug" onClick={select}>
							S: T {streamerId} | B {streamerBnetId?.toString()} | C {streamerCharacterId?.toString()}
							<br />
							V: B {viewerBnetId?.toString()} | P {viewerPlatform?.toString()} | OT {viewerOpaqueId} {viewerGavePermission} | T {viewerId}
						</pre>
					</>
				)}
				<div className={styles.logo} />
			</div>
		</div>
	);
};

interface IToggleProps {
	on: boolean;
	title: string;
	onToggle: () => void;
}
const Toggle: React.FC<IToggleProps> = ({ on, onToggle, title }) => {
	return (
		<div className={styles.toggle} onClick={onToggle}>
			<div className={styles.title}>{title}</div>
			<div className={classNames(styles.value, { [styles.toggleOn]: on })}>{on ? <FiToggleRight /> : <FiToggleLeft />}</div>
		</div>
	);
};
