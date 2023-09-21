import classNames from "classnames";
import { Localizer } from 'Global/Localizer/Localizer';
import { useDefsEffect } from "Global/Utils/Helpers";
import React, { useState } from "react";
import { ItemIconBasic } from "UI/Destiny/Items/Components/ItemIconBasic";
import { ViewerBountyStatus } from '../../../../Global/Contracts/Proto/ViewerBountyStatus';
import PubSubDataStore from '../../../../Global/DataStore/PubSubDataStore';
import { ViewerBountyDefinitionFetcher } from '../../../../Global/Utils/DefinitionUtils';
import { useMountEffect } from '../../../../Global/Utils/Helpers';
import styles from "./BountyContainer.module.scss";

interface IBountyItemProps
{
	bounty: ViewerBountyStatus;
	hideRewards?: boolean;
}


export const BountyItem: React.FC<IBountyItemProps> = ({
	bounty,
	hideRewards
}) =>
{
	const [pubSubData, setPubSubData] = useState(PubSubDataStore.state);

	useMountEffect(() =>
	{
		return [
			PubSubDataStore.observe(setPubSubData)
		].forEach(d => d());
	});

	const defs = useDefsEffect(
		bounty,
		(oldVal, newVal) => oldVal?.ProgressionHash !== newVal.ProgressionHash,
		ViewerBountyDefinitionFetcher.create([bounty])
	);

	const def = defs?.bounties[bounty.ProgressionHash];
	if (!def)
	{
		return null;
	}

	const completionPct = (bounty.Progress / bounty.CompletionGoalValue) * 100;
	const classes = classNames(styles.viewerBounty, {
		[styles.complete]: bounty.IsCompleted,
		[styles.redeemed]: bounty.IsRedeemed,
		[styles.progressable]: pubSubData.isPlayingTrials
	});

	const bountyRewardsTitle = Localizer.Twitchext.Rewards;
	const bountyRewards = Localizer.Twitchext[`Reward-${def.hash}`];

	return (
		<div className={classes}>
			<ItemIconBasic
				className={styles.icon}
				style={{ backgroundImage: `url(twitch-bounty.png)` }}
				iconPath={"/twitch-bounty.png"}
			/>
			<div className={styles.textContent}>
				<div className={styles.title}>
					{def.displayProperties.name}
				</div>
				<div className={styles.subtitle}>
					{def.displayProperties.description}
				</div>
				{bountyRewards && !hideRewards &&
					<div className={classNames(styles.textContent, styles.bountyRewards)}>
						<div className={styles.title}>
							{bountyRewardsTitle}
						</div>
						<div className={styles.subtitle}>
							{bountyRewards}
						</div>
					</div>
				}
				<div className={styles.progress}>
					{!bounty.IsCompleted &&
						<React.Fragment>
							<div className={styles.fill} style={{
								width: `${completionPct}%`
							}} />
							<div className={styles.progressText}>
								<div className={styles.progressName}>
									{def.displayProperties.name}
								</div>
								<div className={styles.progressValue}>
									{bounty.Progress} / {bounty.CompletionGoalValue}
								</div>
							</div>
						</React.Fragment>
					}

					{bounty.IsCompleted && !bounty.IsRedeemed &&
						<div className={styles.progressMessage}>
							{Localizer.Twitchext.BountyEarned}
						</div>
					}

					{bounty.IsCompleted && bounty.IsRedeemed &&
						<div className={styles.progressMessage}>
							{Localizer.Twitchext.BountyRedeemed}
						</div>
					}
				</div>
			</div>
		</div>
	);
}