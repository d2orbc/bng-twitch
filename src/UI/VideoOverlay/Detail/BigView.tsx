import classNames from "classnames";
import { Environments } from "Global/EBS/ebs";
import { Localizer } from "Global/Localizer/Localizer";
import { useMountEffect } from "Global/Utils/Helpers";
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { FiHelpCircle, FiSettings } from "react-icons/fi";
import { Spinner } from "UI/Controls/Spinner";
import DetailDataStore from "../../../Global/DataStore/DetailDataStore";
import GlobalLoadingDataStore from "../../../Global/DataStore/GlobalLoadingDataStore";
import PubSubDataStore from "../../../Global/DataStore/PubSubDataStore";
import StreamerStateDataStore from "../../../Global/DataStore/StreamerStateDataStore";
import EBS from "../../../Global/EBS/ebs";
import { ExtensionEnabled, usePrevious } from "../../../Global/Utils/Helpers";
import styles from "./BigView.module.scss";
import DetailContainer from "./DetailContainer";
import { ErrorContainer } from "./Errors/ErrorContainer";
import { SettingsDetail } from "./Settings/SettingsDetail";
import Nameplate from "./Streamer/Nameplate";

export const defaultActiveTabIndexKey = "defaultActiveTabIndex";

export interface IDetailContainerTab {
	label: React.ReactNode;
	showPip: boolean; 
	children: React.ReactNode;
	onSelected?: ()=> void;
}

interface IDetailContainerProps {
	open: boolean;
	tabs: IDetailContainerTab[];
	defaultActiveTabIndex: number;
	children?: undefined;
}

type Props = React.PropsWithChildren<IDetailContainerProps>;

export const BigView: React.FC<IDetailContainerProps> = ({ open, defaultActiveTabIndex, tabs }: Props) => {
	// Prevent setting the default active tab to an index greater than the length of the tabs
	const [pubsubData, setPubsubData] = useState(PubSubDataStore.state);
	const [detailData, setDetailData] = useState(DetailDataStore.state);
	const [loadingData, setLoadingData] = useState(GlobalLoadingDataStore.state);
	const [unsafeActiveTabIndex, setActiveTabIndex] = useState(defaultActiveTabIndex);
	const [streamerState, setStreamerState] = useState(StreamerStateDataStore.state);

	const positionSettings = streamerState.status?.Response?.unsafeBroadcasterSystemStatus.Settings;

	// Ensure we aren't using a tab index greater than the tab count
	const activeTabIndex = Math.min(unsafeActiveTabIndex, tabs.length - 1);

	const prevTab = usePrevious(activeTabIndex);
	const prevOpen = usePrevious(open);

	useEffect(() => {
		if (prevTab !== activeTabIndex || (!prevOpen && open)) {
			ReactGA.pageview("/tab-" + (tabs[activeTabIndex].label?.toString() ?? "").replace(/\s+/, ""));
		}
	});

	useMountEffect(() => {
		PubSubDataStore.observe(setPubsubData);
		DetailDataStore.observe(setDetailData);
		GlobalLoadingDataStore.observe(setLoadingData);
		StreamerStateDataStore.observe((data) => setStreamerState(data));
	});

	const setTabIndex = (index: number) => {
		// Remember the active tab for this session
		sessionStorage.setItem(defaultActiveTabIndexKey, String(index));

		setActiveTabIndex(index);
	};

	const activeTab = tabs[activeTabIndex];
	const tabItems = tabs.map((tab, index) => (
		<div key={index} className={classNames(styles.tab, { [styles.active]: index === activeTabIndex })} 
		onClick={() => {
			setTabIndex(index);
			tab.onSelected && tab.onSelected() 
		}}>
			{tab.showPip && <div className={styles.newBountyPip} />}
			{tab.label}
		</div>
	));

	const classes = classNames(styles.container, styles[`${positionSettings?.horizontalPos}`], {
		[styles.open]: open,
		[styles.loaded]: loadingData.complete,
		[styles.detailMode]: detailData.detail !== undefined,
	});

	const innerClasses = classNames(styles.inner, { [styles.on]: loadingData.complete });

	const onSettingsClick = () => {
		DetailDataStore.setDetail({
			title: Localizer.Twitchext.Settings,
			children: <SettingsDetail />,
		});
	};

	const extensionEnabled = ExtensionEnabled(pubsubData);

	return (
		<React.Fragment>
			<div className={classes}>
				{!loadingData.complete && (
					<div className={styles.spinnerContainer}>
						<Spinner on={true} />
					</div>
				)}

				<div className={innerClasses}>
					<div className={styles.summary}>
						<>
							{extensionEnabled && pubsubData.playerData?.ActiveDestinyCharacter && <Nameplate character={pubsubData.playerData?.ActiveDestinyCharacter} />}
							<div className={styles.tabContainer}>
								{extensionEnabled && tabItems}
								<div className={classNames(styles.iconContainer, styles.settingsIconContainer)}>
									<FiSettings className={styles.icon} onClick={onSettingsClick} />
								</div>
								<div className={styles.iconContainer}>
									<a href={`${Environments[EBS.env + "Bnet"]}/${Localizer.CurrentCultureName}/twitch-ext/help`} target="_blank" rel="noreferrer nofollow noopener">
										<FiHelpCircle className={styles.icon} />
									</a>
								</div>
							</div>
							{extensionEnabled && (
								<div className={styles.tabContent}>
									{!pubsubData.playerData?.ActiveDestinyCharacter && (
										<div style={{ margin: "auto" }}>{Localizer.Format(Localizer.Twitchext.WaitingForStreamer, { streamer: pubsubData.twitchContext?.playerChannel })}</div>
									)}

									{pubsubData.playerData?.ActiveDestinyCharacter && <>{activeTab.children}</>}
								</div>
							)}
						</>
					</div>
					<div className={styles.detail}>
						<DetailContainer detail={detailData.detail} />
					</div>
				</div>
			</div>
			<ErrorContainer bigViewOpen={open} rightAligned={positionSettings?.horizontalPos === "right"} />
		</React.Fragment>
	);
};
