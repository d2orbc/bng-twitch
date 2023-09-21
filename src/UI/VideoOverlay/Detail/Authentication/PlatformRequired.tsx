import classNames from "classnames";
import { PlatformType } from "Global/Contracts/Proto/PlatformType";
import { Localizer } from "Global/Localizer/Localizer";
import React, { useState } from "react";
import { Button } from "UI/Controls/Button";
import { ErrorDisplay } from "UI/Errors/ErrorDisplay";
import EBS, { Environments } from '../../../../Global/EBS/ebs';
import { Nullish } from '../../../../Global/EBS/Util/TypesUtil';
import styles from "./PlatformRequired.module.scss";

interface ILinkedProps
{
	platformChoices: PlatformType[] | Nullish;
	onPlatformChoice: () => void;
}

const PlatformsRequired: React.FC<ILinkedProps> = ({
	platformChoices,
	onPlatformChoice
}) =>
{
	const [submissionFailedMessageState, setSubmissionFailedMessageState] = useState<Error | null>(null);

	const handleClick = (pType: PlatformType) =>
	{
		EBS.setPlatformType(pType)
			.then(() =>
			{
				setSubmissionFailedMessageState(null);
				onPlatformChoice();
			})
			.catch(error =>
			{
				setSubmissionFailedMessageState(error);
			});
	};

	const hasValidPlatforms = (platformChoices?.length ?? 0 > 0) && platformChoices?.every(a => a.toString() !== "254");

	return (
		<div className={styles.linkedWrapper}>
			<h3 className={styles.successCheck}>
				{Localizer.Twitchext.Platform}
			</h3>

			{hasValidPlatforms && (
				<>
					<p>{Localizer.Twitchext.PlatformSelection}</p>
					{submissionFailedMessageState &&
						<div className={styles.errorDisplay}>
							<ErrorDisplay>{submissionFailedMessageState.toString()}</ErrorDisplay>
						</div>
					}
					<div className={styles.platforms}>
						{platformChoices?.map((value) =>
						{
							// need the real platformName from the destinyMembership
							const platformName = PlatformType[value] !== "0" ? PlatformType[value] : "";

							return <Button
								size={"Small"}
								className={classNames(styles.platformButton)}
								style={{ backgroundImage: `url(${PlatformType[value] + "-Logo.png"})` }}
								buttonType={"white"}
								onClick={() => handleClick(value)}>{Localizer.TwitchExt[platformName]}</Button>

						})}

					</div>
				</>
			)}

			{!hasValidPlatforms && (
				<>
					<div style={{ marginBottom: "2rem" }}>{Localizer.Twitchext.NoValidD2Accounts}</div>
					<Button url={`${Environments[EBS.env + "Bnet"]}/${Localizer.CurrentCultureName}/Profile/Settings?category=Accounts`}>
						{Localizer.Twitchext.OpenBungieNetSettings}
					</Button>
				</>
			)}


		</div>
	);
};

export default PlatformsRequired;