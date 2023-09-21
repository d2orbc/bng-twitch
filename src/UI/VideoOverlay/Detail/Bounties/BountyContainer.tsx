import classNames from "classnames";
import { PlatformType } from "Global/Contracts/Proto/PlatformType";
import { Localizer } from "Global/Localizer/Localizer";
import React from "react";
import { ViewerStateResponse } from "../../../../Global/Contracts/Proto/ViewerStateResponse";
import styles from "./BountyContainer.module.scss";
import { BountyItem } from "./BountyItem";

interface IBountyContainerProps {
	viewerState: ViewerStateResponse;
}

export const BountyContainer: React.FC<IBountyContainerProps> = ({ viewerState }) => {
	return (
		<div className={styles.wrapper}>
			<UserCard viewerState={viewerState} />
			{viewerState?.Response?.ViewerBountyStatus?.map((bounty) => (
				<BountyItem key={bounty.ProgressionHash} bounty={bounty} />
			))}
		</div>
	);
};

interface IUserCardProps {
	viewerState: ViewerStateResponse;
}

const UserCard: React.FC<IUserCardProps> = ({ viewerState }) => {
	if (viewerState?.Response?.ChosenPlatform) {
		const isCrossSaved = viewerState?.Response?.IsCrossSaved;
		const platformName = Localizer.Twitchext[PlatformType[viewerState.Response.ChosenPlatform]];
		const chosenPlatform = isCrossSaved ? Localizer.Twitchext.YourRewwardsWillBeSent : Localizer.Format(Localizer.Twitchext.YourRewardsWillBeSent, { platformName: platformName });

		return (
			<div className={classNames(styles.viewerUserCard)}>
				<div 
				className={styles.logo} 
				style={{ backgroundImage: `url(${isCrossSaved ? "CrossSaveIcon.png" : PlatformType[viewerState.Response.ChosenPlatform] + "-Logo.png"})` }} />
				<div className={styles.textContainer}>
					<strong>{platformName}</strong>
					<p>{chosenPlatform}</p>
				</div>
			</div>
		); 
	} else {
		return null;
	}
};
