import React from "react";
import classNames from "classnames";
import { BnetImage } from "Global/Utils/Helpers";
import styles from "./ItemPerks.module.scss";
import { DestinySandboxPerkDefinition } from "Global/Contracts/BnetPlatform.TSDefinitions";

interface IItemPerksProps
{
	perks: DestinySandboxPerkDefinition[];
	isMatchForgivenessApplicable: boolean;
	isMatchForgivenessUsed: boolean;
}

const perkHashForgivenessApplicable = 989028955;
const perkHashForgivenessUsed = 1349727737;

const ItemPerks: React.FC<IItemPerksProps> = ({
	perks, isMatchForgivenessApplicable, isMatchForgivenessUsed
}) =>
{
	return (
		<div className={styles.perks}>
			{perks.map(perk => 
			{
				if (!perk) 
				{
					return null;
				}
				const notPassageOfMercy = perk.hash !== perkHashForgivenessApplicable && perk.hash !== perkHashForgivenessUsed;
				const forgivenessApplicableVisible = perk.hash === perkHashForgivenessApplicable && isMatchForgivenessApplicable;
				const forgivenessUsedVisible = perk.hash === perkHashForgivenessUsed && isMatchForgivenessUsed;
				const showPerk = notPassageOfMercy || forgivenessApplicableVisible || forgivenessUsedVisible;

				if (!showPerk)
				{
					return null;
				}

				return <div key={perk.hash} className={styles.perkCategory}>
					<div>
						<div key={perk.hash} className={classNames(styles.perk)}>
							<div className={styles.perkIcon} style={{
								backgroundImage: `url(${BnetImage(perk.displayProperties.icon)})`
							}} />
							<div className={styles.perkContent}>
								<div className={styles.perkTitle}>
									{perk.displayProperties.name}
								</div>
								<div className={styles.perkSubtitle}>
									{perk.displayProperties.description}
								</div>
							</div>
						</div>
					</div>
				</div>
			}
			)}
		</div>
	);
}

export default ItemPerks;