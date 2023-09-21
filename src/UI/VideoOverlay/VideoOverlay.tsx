import classNames from "classnames";
import {Localizer} from "Global/Localizer/Localizer";
import {StringFetcher} from "Global/Localizer/StringFetcher";
import {StringUtils} from "Global/Utils/StringUtils";
import {DateTime} from "luxon";
import React from "react";
import ReactGA from "react-ga";
import {Tooltip} from "UI/Controls/Tooltip";
import TrialsTicket from "UI/Destiny/Trials/TrialsTicket";
import {ErrorDataStore} from "../../Global/DataStore/ErrorDataStore";
import PubSubDataStore, {IPubSubDataStorePayload} from "../../Global/DataStore/PubSubDataStore";
import {IResponsiveState, ResponsiveDataStore} from "../../Global/DataStore/ResponsiveDataStore";
import {ISettingsDataStorePayload, SettingsDataStore} from "../../Global/DataStore/SettingsDataStore";
import TwitchUserStateDataStore from "../../Global/DataStore/TwitchUserStateDataStore";
import ViewerStateDataStore, {IViewerStateDataStorePayload} from "../../Global/DataStore/ViewerStateDataStore";
import {IWebmasterDataStorePayload, WebmasterDataStore} from "../../Global/DataStore/WebmasterDataStore";
import {supportsBackdropFilter} from "../../Global/Utils/BrowserUtils";
import {ConfigUtils} from "../../Global/Utils/ConfigUtils";
import {ServiceError} from "../../Global/Utils/CustomErrors";
import {ExtensionEnabled} from "../../Global/Utils/Helpers";
import AuthRequired from "./Detail/Authentication/AuthRequired";
import {BigView, defaultActiveTabIndexKey, IDetailContainerTab} from "./Detail/BigView";
import {BountyContainer} from "./Detail/Bounties/BountyContainer";
import {ErrorItem} from "./Detail/Errors/ErrorItem";
import {StreamerContainer} from "./Detail/Streamer/StreamerContainer";
import {MiniView} from "./Mini/MiniView";
import {Reaction} from "./Reaction/Reaction";
import styles from "./VideoOverlay.module.scss";
import {BountyToast} from "./BountyToast/BountyToast";
import StreamerStateDataStore from "../../Global/DataStore/StreamerStateDataStore";
import {IStreamerStateDataStorePayload} from "../../Global/DataStore/StreamerStateDataStore";
import {ViewerBountyStatus} from "Global/Contracts/Proto/ViewerBountyStatus";
import { Toast } from "./Toast/Toast";
import { AuthUtils } from "./Detail/Authentication/AuthUtils";

export const StorageOpenKey = "SettingIsOpen";

const defaultActiveTabIndexString = sessionStorage.getItem(defaultActiveTabIndexKey);
const defaultActiveTabIndex = defaultActiveTabIndexString ? parseInt(defaultActiveTabIndexString) : 0;

export const TooltipPortalContainer = React.createRef<HTMLDivElement>();

interface IVideoOverlayState
{
	/** If true, shows the big view */
	isOpen: boolean;
	pubsubData: IPubSubDataStorePayload;
	webmasterData: IWebmasterDataStorePayload;
	viewerState: IViewerStateDataStorePayload;
	streamerState: IStreamerStateDataStorePayload;
	stringFetcherData: { loaded: boolean; started: boolean };
	/** If > 0, a match reaction will show */
	matchEndedSecondsRemaining: number;
	/** Viewer settings */
	settings: ISettingsDataStorePayload;

	disabledErrorGuid: string | null;
	responsive: IResponsiveState;
	smallScreenTooltipVisible: boolean;
	showGiftSubPopup: boolean;
	lastGiftSubBountyDate: number;
	/** If > 0, a giftsub toast will show */
	giftSubToastSecRemaining: number;
	localViewerBountyStatus: ViewerBountyStatus | null;
}

/** Renders the entire on-stream view */
export class VideoOverlay extends React.Component<{}, IVideoOverlayState>
{
	public static MATCH_END_REACTION_WINDOW_SECONDS = 30;
	private reactionInterval: number = 0;
	public static BOUNTY_TOAST_SECONDS = 6;
	private showGiftSubToastInterval: number = 0;

	constructor(props: {})
	{
		super(props);

		const defaultOpen = JSON.parse(localStorage.getItem(StorageOpenKey) ?? "true");

		this.state = {
			isOpen: defaultOpen,
			pubsubData: PubSubDataStore.state,
			webmasterData: WebmasterDataStore.state,
			stringFetcherData: StringFetcher.state,
			settings: SettingsDataStore.state,
			viewerState: ViewerStateDataStore.state,
			streamerState: StreamerStateDataStore.state,
			matchEndedSecondsRemaining: VideoOverlay.MATCH_END_REACTION_WINDOW_SECONDS + 1,
			/** Used to determine whether we should hide or show the offline error */
			disabledErrorGuid: null,
			responsive: ResponsiveDataStore.state,
			/** If true, we are showing the tooltip that explains why the extension won't show at small sizes */
			smallScreenTooltipVisible: false,
			showGiftSubPopup: false,
			giftSubToastSecRemaining: VideoOverlay.MATCH_END_REACTION_WINDOW_SECONDS + 1,
			localViewerBountyStatus: null,
			lastGiftSubBountyDate: 0
		};
	}

	public componentDidMount()
	{
		ReactGA.pageview("/video-overlay");

		if (this.state.isOpen)
		{
			ReactGA.pageview("/big-view");
		}
		else
		{
			ReactGA.pageview("/mini-view");
		}

		StringFetcher.observe((data) =>
			this.setState({
				stringFetcherData: data,
			})
		);

		// We want strings to load first, that way we can show any error messages from resultant operations
		StringFetcher.fetch(true).then(() =>
		{
			TwitchUserStateDataStore.initialize(() =>
			{
				PubSubDataStore.observe((data) =>
					this.setState({
						pubsubData: data,
					})
				);

				ViewerStateDataStore.observe((data) =>
					this.setState({
						viewerState: data,
					})
				);

				WebmasterDataStore.initialize();
				WebmasterDataStore.observe((data) =>
					this.setState({
						webmasterData: data,
					})
				);

				StreamerStateDataStore.initialize();
				StreamerStateDataStore.observe((data) =>
					this.setState({
						streamerState: data,
					})
				);

				ResponsiveDataStore.initialize();
				ResponsiveDataStore.observe((responsive) =>
				{
					// Set a classname for each responsive size so we can access them in CSS
					Object.keys(responsive).forEach((key) =>
					{
						const isTrue = responsive[key];
						const className = `r-${key}`;
						if (isTrue && !document.documentElement.classList.contains(className))
						{
							document.documentElement.classList.add(className);
						}
						else if (!isTrue && document.documentElement.classList.contains(className))
						{
							document.documentElement.classList.remove(className);
						}
					});

					this.setState({
						responsive,
					});
				});

				SettingsDataStore.observe((settings) => this.setState({settings}));
			});
		});
	}

	private isEnabled()
	{
		return ExtensionEnabled(this.state.pubsubData);
	}

	public componentDidUpdate(_: {}, prevState: IVideoOverlayState)
	{
		// This property will stay the same for each update until an activity ends, at which point it will change - thus, we need to compare on each update.
		const matchEndedUpdated = this.state.pubsubData?.activityEnd?.DateEndedSecondsSinceEpoch !== prevState.pubsubData?.activityEnd?.DateEndedSecondsSinceEpoch;
		if (matchEndedUpdated)
		{
			this.onMatchEnded();
		}

		if (this.state.isOpen !== prevState.isOpen)
		{
			if (this.state.isOpen)
			{
				ReactGA.pageview("/big-view");
			}
			else
			{
				ReactGA.pageview("/mini-view");
			}
		}

		if (this.state.stringFetcherData.loaded && this.state.webmasterData.loaded)
		{
			const isEnabled = this.isEnabled();

			/**
			 * There are a lot of reasons the extension can be disabled - we just want to communicate that it is offline. Since
			 * this is not a real 'error' that will come from the EBS, we need to detect the situation ourselves and show/hide the
			 * error when appropriate.
			 */
			if (!isEnabled && !this.state.disabledErrorGuid)
			{
				const guid = ErrorDataStore.add(
					new ServiceError({
						ErrorStringKey: "ERROR_OFFLINE",
						ErrorStringParams: {extensionName: Localizer.Twitchext.ExtensionName},
					})
				);

				if (guid)
				{
					this.setState({
						disabledErrorGuid: guid,
					});
				}
			}
			else if (isEnabled && this.state.disabledErrorGuid)
			{
				ErrorDataStore.remove(this.state.disabledErrorGuid);

				this.setState({
					disabledErrorGuid: null,
				});
			}
		}

		const {
			DateGivenSecondsSinceEpoch,
			GiverMembershipId
		} = this.state.pubsubData.giftSubReward ?? {};

		const currentUserId = TwitchUserStateDataStore.state.twitchViewer?.id ?? "0";
		const giverIdString = GiverMembershipId?.toString() ?? "-1";
		const currentUserIsGiver = giverIdString === currentUserId;

		const isNewBounty = !!DateGivenSecondsSinceEpoch && this.state.lastGiftSubBountyDate !== DateGivenSecondsSinceEpoch;

		if (!this.state.showGiftSubPopup
			&& currentUserIsGiver
			&& isNewBounty)
		{
			this.setState({
				lastGiftSubBountyDate: DateGivenSecondsSinceEpoch!
			}, () =>
			{
				this.onShowBountyToast(2350534509, 1);
			})
			// redeemed a gift sub bounty - show the popup

		}
	}

	private onMatchEnded = () =>
	{
		const matchEndedTimestamp = DateTime.local();

		this.setState({
			matchEndedSecondsRemaining: VideoOverlay.MATCH_END_REACTION_WINDOW_SECONDS,
		});

		// Decrement the remaining time by 1 second per second. The CSS transition is also set to 1 second without easing, so it will look like a very smooth transition.
		this.reactionInterval = window.setInterval(() =>
		{
			const remaining = Math.ceil(VideoOverlay.MATCH_END_REACTION_WINDOW_SECONDS + matchEndedTimestamp.diffNow().as("seconds"));
			this.setState({
				matchEndedSecondsRemaining: remaining,
			});

			if (remaining <= 0)
			{
				clearInterval(this.reactionInterval);
			}
		}, 1000);
	};

	private onShowBountyToast = (hash: number, increment: number) =>
	{
		setTimeout(() =>
		{
			const newViewerState = ViewerStateDataStore.mockUpdate(hash, increment);

			const newBounty = newViewerState?.status?.Response?.ViewerBountyStatus?.find((b) => b.ProgressionHash === hash);

			if (newBounty)
			{
				this.setState({localViewerBountyStatus: newBounty});
			}
		}, 500);

		this.setState({
			showGiftSubPopup: true,
		});

		const giftSubShowTimestamp = DateTime.local();

		this.setState({
			giftSubToastSecRemaining: VideoOverlay.BOUNTY_TOAST_SECONDS,
		});

		// Decrement the remaining time by 1 second per second. The CSS transition is also set to 1 second without easing, so it will look like a very smooth transition.
		this.showGiftSubToastInterval = window.setInterval(() =>
		{
			const remaining = Math.ceil(VideoOverlay.BOUNTY_TOAST_SECONDS + giftSubShowTimestamp.diffNow().as("seconds"));
			this.setState({
				giftSubToastSecRemaining: remaining,
			});

			if (remaining <= 0)
			{
				clearInterval(this.showGiftSubToastInterval);
				this.setState({
					localViewerBountyStatus: null,
					showGiftSubPopup: false,
				});
			}
		}, 1000);
	};

	/** Called when switching between mini and big view */
	private readonly onToggle = () =>
	{
		const newOpen = !this.state.isOpen;

		// Save the open state in localStorage
		localStorage.setItem(StorageOpenKey, JSON.stringify(newOpen));

		this.setState({
			isOpen: newOpen,
		});
	};

	private readonly onReacted = () =>
	{
		clearInterval(this.reactionInterval);

		this.setState({
			matchEndedSecondsRemaining: 0,
		});
	};

	public render()
	{
		const {isOpen: baseIsOpen, responsive, pubsubData, stringFetcherData, viewerState, streamerState} = this.state;

		if (!stringFetcherData.loaded)
		{
			return null;
		}

		const viewPlacementSettings = streamerState.status?.Response?.unsafeBroadcasterSystemStatus.Settings;
		const horizontalPosition = styles[`${viewPlacementSettings?.horizontalPos}`] || styles.left;
		const verticalPosition = styles[`${viewPlacementSettings?.verticalPos}`] || styles.center;

		// Only allow open at sizes larger than mobile, and when the streamer is authed with Bungie.net
		const canOpen = !responsive.mobile && !pubsubData.systemStatus.StreamerMustReauth;
		const isOpen = baseIsOpen && canOpen;

		const ticket = pubsubData.playerData?.ActiveDestinyCharacter?.DestinyTrialsTicket;

		const containerClasses = classNames(styles.container, "container", {[styles.open]: isOpen}, horizontalPosition, verticalPosition, {
			// These are 'global' classes because we need to be able to access them from other files
			visualEffects: this.state.settings.toggles.visualEffects,
			canBlur: this.state.settings.toggles.visualEffects && supportsBackdropFilter(),
		});

		const uiContainerClasses = classNames(styles.uiContainer, {
			[styles.open]: isOpen,
		});

		const miniViewClasses = classNames(styles.miniView, {
			[styles.canOpen]: canOpen,
		});

		const tabs: IDetailContainerTab[] = [
			{
				label: Localizer.Twitchext.StreamerTabLabel,
				showPip: false,
				children: <StreamerContainer/>,
			},
		];

		const giftSubsWarnWhenOffline = ConfigUtils.SystemStatus("Destiny2TwitchExtUI_GiftSubsWarnWhenOffline");

		// We can disable bounties, in which case let's hide the tab
		if (ConfigUtils.SystemStatus("Destiny2TwitchExtUI_Bounties"))
		{
			let showPip = true;
			const dtNow = DateTime.utc();
			const resetThisWeek = dtNow.set({weekNumber: dtNow.weekNumber, weekday: 2, hour: 17, minute: 0, second: 0, millisecond: 0});

			let lastReset = resetThisWeek > dtNow
				? resetThisWeek.minus({week: 1})
				: resetThisWeek;

			const checkPip = () => {if (localStorage.getItem("weeklyReset") === lastReset.toString()){
				showPip = false;
			}};

			checkPip();

			tabs.push({
				label: Localizer.Twitchext.ViewerBountiesTabLabel,
				showPip: showPip,
				children: <AuthRequired isConfig={false}>{viewerState.status && <BountyContainer viewerState={viewerState.status}/>}</AuthRequired>,
				onSelected: () => {localStorage.setItem("weeklyReset", lastReset.toString()); checkPip();}
			});
		}

		const showMiniTrialsTicket = ticket && ticket?.TicketItemHash !== 0 && pubsubData.isPlayingTrials;

		const miniMouseEnter = () =>
			this.setState({
				smallScreenTooltipVisible: responsive.mobile,
			});

		const miniMouseLeave = () =>
			this.setState({
				smallScreenTooltipVisible: false,
			});

		return (
			<div className={containerClasses}>
				{viewerState?.status?.Response && !viewerState.status.Response.IsLinked && 
				<Toast icon={"Twitch-Logo.png"} onClick={() => AuthUtils.openAuthLinkWindow()} >
					<div className={styles.overlayToast}>
						<div className={styles.toastTitle}>{Localizer.Twitchext.LinkAccountToastTitle}</div>
						<div className={styles.toastText}>{Localizer.Twitchext.LinkAccountToastText}</div>
					</div>
				</Toast>
				}
				<div className={uiContainerClasses}>
					<>
						<BigView open={isOpen} defaultActiveTabIndex={defaultActiveTabIndex} tabs={tabs}/>
						<MiniView open={isOpen} onToggle={this.onToggle} className={miniViewClasses} onMouseEnter={miniMouseEnter} onMouseLeave={miniMouseLeave}>
							{showMiniTrialsTicket && <TrialsTicket className={styles.trialsTicket} ticket={ticket!} hideTooltip={true}/>}
							{!showMiniTrialsTicket && (
								<div className={styles.d2Mini}>
									<div
										style={{
											backgroundImage: `url(Destiny2Logo.png)`,
											width: "3rem",
											height: "2.5rem",
											margin: "auto auto 0",
											backgroundSize: "contain",
											backgroundPosition: "center",
											backgroundRepeat: "no-repeat",
										}}
									/>
									<div className={styles.label}>{Localizer.Twitchext.MiniViewLabel}</div>
								</div>
							)}
						</MiniView>
						<Tooltip visible={this.state.smallScreenTooltipVisible} position={"auto"}>
							<div className={styles.smallScreenTooltip}>
								{Localizer.Format(Localizer.Twitchext.MinimumSizeTooltip, {
									extensionName: Localizer.Twitchext.ExtensionName,
								})}
							</div>
						</Tooltip>
					</>
				</div>
				<div className={styles.tooltipContainer} ref={TooltipPortalContainer}/>

				{this.state.showGiftSubPopup && this.state.localViewerBountyStatus !== null && (
					<BountyToast
						className={classNames(styles.reaction, {[styles.reactionVisible]: this.state.giftSubToastSecRemaining > 0 && this.state.giftSubToastSecRemaining < VideoOverlay.BOUNTY_TOAST_SECONDS})}
						headerTitle={Localizer.Twitchext.GiftSubsToastTitle}
						headerSubtitle={Localizer.Twitchext.GiftSubsToastText}
						viewerBountyStatus={this.state.localViewerBountyStatus}
					/>
				)}

				{!pubsubData.systemStatus.StreamerMustReauth && (
					<Reaction
						activityEndMessage={pubsubData.activityEnd}
						className={classNames(styles.reaction, {
							[styles.reactionVisible]: this.state.matchEndedSecondsRemaining > 0 && this.state.matchEndedSecondsRemaining < VideoOverlay.MATCH_END_REACTION_WINDOW_SECONDS,
						})}
						onReacted={this.onReacted}
						timeoutMaxSeconds={VideoOverlay.MATCH_END_REACTION_WINDOW_SECONDS}
						timeoutRemainingSeconds={this.state.matchEndedSecondsRemaining}
					/>
				)}

				{pubsubData.systemStatus.StreamerMustReauth && (
					<ErrorItem
						className={styles.separatedErrorItem}
						errorDisplay={{
							adding: true,
							removing: false,
							error: new Error(
								Localizer.Format(Localizer.Twitchext.ERROR_STREAMER_REAUTH_REQUIRED, {
									streamerName: pubsubData.twitchContext?.playerChannel,
									extensionName: Localizer.Twitchext.ExtensionName,
								})
							),
							guid: StringUtils.generateGuid(),
							preventClose: true,
							stringKey: "ERROR_STREAMER_REAUTH_REQUIRED",
						}}
					/>
				)}

				{giftSubsWarnWhenOffline && !pubsubData.systemStatus.GiftSubscriptions && (
					<ErrorItem
						className={styles.separatedErrorItem}
						errorDisplay={{
							adding: true,
							removing: false,
							error: new Error(
								Localizer.Twitchext.ERROR_GIFT_SUBS_OFFLINE
							),
							guid: StringUtils.generateGuid(),
							preventClose: true,
							stringKey: "ERROR_GIFT_SUBS_OFFLINE",
						}}
						
					/>
				)}
			</div>
		);
	}
}
