import classNames from 'classnames';
import React, { useState } from "react";
import StreamerStateDataStore from '../../../Global/DataStore/StreamerStateDataStore';
import ViewerStateDataStore from '../../../Global/DataStore/ViewerStateDataStore';
import { useMountEffect } from '../../../Global/Utils/Helpers';
import { BountyItem } from "../Detail/Bounties/BountyItem";
import styles from "../Reaction/Reaction.module.scss";
import { ViewerBountyStatus } from 'Global/Contracts/Proto/ViewerBountyStatus';

interface IBountyToastProps
{
	className?: string;
	headerTitle: string;
	headerSubtitle: string;
	viewerBountyStatus: ViewerBountyStatus | undefined;
}

export const BountyToast: React.FC<IBountyToastProps> = ({
	className,
	headerTitle,
	headerSubtitle,
	viewerBountyStatus
}) =>
{
	const [viewerState, setViewerState] = useState(ViewerStateDataStore.state);
	const [streamerState, setStreamerState] = useState(StreamerStateDataStore.state);

	useMountEffect(() =>
	{
		const destroys = [
			ViewerStateDataStore.observe(setViewerState),
			StreamerStateDataStore.observe(setStreamerState)
		];

		return () => destroys.forEach(d => d());
	});

	if (viewerBountyStatus === undefined)
	{
		return null;
	}

	const containerClasses = classNames(styles.container, className);

	if (!viewerState?.status || !streamerState?.status)
	{
		return null;
	}

	return (
		<div className={containerClasses}>
			<div className={styles.wrapper}>
				<div className={styles.reactionheader}>
					<div className={styles.reactionTitle}>{headerTitle}</div>
					<div className={styles.reactionSubtitle}>{headerSubtitle}</div>
				</div>
				{viewerBountyStatus !== null &&
					<div className={styles.bountyState}>
						<BountyItem bounty={viewerBountyStatus} hideRewards={true} />
					</div>
				}
			</div>
		</div>
	);
};