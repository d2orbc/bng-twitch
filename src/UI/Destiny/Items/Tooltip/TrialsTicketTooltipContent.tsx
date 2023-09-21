import React from "react";
import styles from "./TrialsTicketTooltipContent.module.scss";
import classNames from "classnames";
import { ITrialsTicketDefinitions } from '../../../../Global/Utils/DefinitionUtils';
import { DestinyTrialsTicket } from "Global/Contracts/Proto/DestinyTrialsTicket";
import ItemPerks from "../Components/ItemPerks";
import { TierType } from "Global/Contracts/BnetPlatform.TSEnum";

export interface ITrialsTicketTooltipContentProps
{
	definitions: ITrialsTicketDefinitions;
	ticket: DestinyTrialsTicket;
}

export const TrialsTicketTooltipContent: React.FC<ITrialsTicketTooltipContentProps> = ({ ticket, definitions }) =>
{
	const tierType = definitions?.ticketItem?.inventory?.tierType ?? TierType.Basic;
	const headerClasses = classNames(styles.header, styles[TierType[tierType]]);

	const {
		ticketItem
	} = definitions;

	const displayProperties = definitions.ticketItem?.displayProperties;

	if (!definitions.perkDefs)
	{
		return null;
	}

	return (
		<div className={styles.wrapper}>
			<div className={headerClasses}>
				<div className={styles.title}>{displayProperties?.name}</div>
				<div className={styles.subtitle}>{ticketItem?.itemTypeAndTierDisplayName}</div>
			</div>
			<div className={styles.body}>
				<ItemPerks perks={Object.values(definitions.perkDefs)} isMatchForgivenessApplicable={ticket.IsLossForgivenessApplicable} isMatchForgivenessUsed={ticket.LossForgivenessUsed}/>
			</div>
		</div>
	);
};
