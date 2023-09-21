import classNames from "classnames";
import { DestinyActivityEndMessage } from "Global/Contracts/Proto/Messages/DestinyActivityEndMessage";
import { Nullish } from "Global/EBS/Util/TypesUtil";
import { Localizer } from "Global/Localizer/Localizer";
import React, { useState } from "react";
import { Spinner } from "UI/Controls/Spinner";
import { ReactionConfigEntry } from "../../../Global/Contracts/Proto/ReactionConfigEntry";
import { ViewerBountyStatus } from "../../../Global/Contracts/Proto/ViewerBountyStatus";
import { ErrorDataStore } from "../../../Global/DataStore/ErrorDataStore";
import StreamerStateDataStore from "../../../Global/DataStore/StreamerStateDataStore";
import ViewerStateDataStore from "../../../Global/DataStore/ViewerStateDataStore";
import EBS from "../../../Global/EBS/ebs";
import { useMountEffect } from "../../../Global/Utils/Helpers";
import styles from "./Reaction.module.scss";
import { BountyToast } from "../BountyToast/BountyToast";

interface IReactionProps {
	activityEndMessage: DestinyActivityEndMessage | Nullish;
	className?: string;
	timeoutMaxSeconds: number;
	timeoutRemainingSeconds: number;
	onReacted: () => void;
}

export const Reaction: React.FC<IReactionProps> = ({ activityEndMessage, className, timeoutMaxSeconds, timeoutRemainingSeconds, onReacted: parentOnReacted }) => {
	const [bounty, setBounty] = useState<ViewerBountyStatus | null>(null);
	const [viewerState, setViewerState] = useState(ViewerStateDataStore.state);
	const [streamerState, setStreamerState] = useState(StreamerStateDataStore.state);
	const [lastActivityDateReactedTo, setLastActivityDateReactedTo] = useState(0);

	useMountEffect(() => {
		const destroys = [ViewerStateDataStore.observe(setViewerState), StreamerStateDataStore.observe(setStreamerState)];

		return () => destroys.forEach((d) => d());
	});

	if (!activityEndMessage) {
		return null;
	}

	// The transition to update the fill bar is one second behind so it animates correctly
	const fixedRemaining = timeoutRemainingSeconds - 1;

	const timeoutPctRounded = Math.floor((fixedRemaining / timeoutMaxSeconds) * 10000) / 100;
	let timeoutPct = Math.min(100, timeoutPctRounded);
	const containerClasses = classNames(styles.container, className);

	// This happens when we get a success response from the reaction API call
	const onReactionSuccess = (hash: number, increment: number) => {
		const existingBounty = viewerState.status?.Response?.ViewerBountyStatus?.find((b) => b.ProgressionHash === hash);

		if (existingBounty) {
			setBounty(existingBounty);

			setTimeout(() => {
				const newViewerState = ViewerStateDataStore.mockUpdate(hash, increment);

				const newBounty = newViewerState?.status?.Response?.ViewerBountyStatus?.find((b) => b.ProgressionHash === hash);

				if (newBounty) {
					setBounty(newBounty);
				}
			}, 500);
		}

		setTimeout(() => {
			parentOnReacted();

			setTimeout(() => setBounty(null), 500);
		}, 5000);
	};

	// This happens if we get a failure response from the reaction API call
	const onReactionError = (e: Error) => {

		// On error, ensure we record that we tried to react to this activity
		setLastActivityDateReactedTo(activityEndMessage.DateEndedSecondsSinceEpoch);
		
		// Tell the parent that we did a reaction
		parentOnReacted();

		setTimeout(() => setBounty(null), 500);

		ErrorDataStore.add(e);
	};

	if (!viewerState?.status || !streamerState?.status) {
		return null;
	}

	const actionsClasses = classNames(styles.actions, {
		[styles.preventReact]: lastActivityDateReactedTo === activityEndMessage.DateEndedSecondsSinceEpoch,
	});

	return (
		<div className={containerClasses}>
			<div className={styles.wrapper}>
						{bounty === null && (
							<>
								<div className={styles.reactionheader}>
									<div className={styles.reactionTitle}>{Localizer.Twitchext.MatchReactionHeader}</div>
									<div className={styles.reactionSubtitle}>{Localizer.Twitchext.MatchReactionSubtitle}</div>
								</div>
								<div
									className={classNames(styles.timerBar, {
										[styles.finished]: bounty !== null,
									})}>
									<div
										className={styles.fill}
										style={{
											width: `${timeoutPct}%`,
										}}
									/>
								</div>
								<div className={actionsClasses}>
									{streamerState.status?.Response?.ValidReactions?.map((reaction) => (
										<ReactionButton 
										activityEndMessage={activityEndMessage} 
										reactionType={reaction} 
										onReactSuccess={onReactionSuccess} 
										onReactError={onReactionError} 
										/>
									))}
								</div>
							</>
						)}

						{bounty !== null && <BountyToast headerTitle={Localizer.Twitchext.MatchReactionHeader} headerSubtitle={Localizer.Twitchext.MatchReactionSubtitle} viewerBountyStatus={bounty} />}
			</div>
		</div>
	);
};

interface IReactionButtonProps {
	activityEndMessage: DestinyActivityEndMessage;
	reactionType: ReactionConfigEntry;
	onReactSuccess: (hash: number, increment: number) => void;
	onReactError: (e: Error) => void;
}

const ReactionButton: React.FC<IReactionButtonProps> = ({ reactionType, activityEndMessage, onReactSuccess, onReactError }) => {
	const onClick = () => {
		
		EBS.sendReaction(reactionType.Reaction, activityEndMessage)!.then((data) => {
				onReactSuccess(1345591265, 1);
			}).catch((e) => {
				onReactError(e);
			})
	};

	return (
		<div className={styles.reactionButton} onClick={onClick}>
			<div
				className={styles.reaction}
				style={{
					backgroundImage: `url(reactions/${reactionType.Reaction}.png)`,
				}}
			/>
		</div>
	);
};
