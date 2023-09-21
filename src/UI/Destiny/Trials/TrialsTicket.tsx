import classNames from "classnames";
import { DestinyUnlockValueUIStyle } from "Global/Contracts/BnetPlatform.TSEnum";
import { DestinyTrialsTicket } from "Global/Contracts/Proto/DestinyTrialsTicket";
import { ConfigUtils } from "Global/Utils/ConfigUtils";
import { Localizer } from "Global/Localizer/Localizer";
import { useDefsEffect } from "Global/Utils/Helpers";
import React, { useState } from "react";
import { Tooltip } from "UI/Controls/Tooltip";
import PubSubDataStore from '../../../Global/DataStore/PubSubDataStore';
import { TrialsTicketDefinitionFetcher } from '../../../Global/Utils/DefinitionUtils';
import { useMountEffect } from '../../../Global/Utils/Helpers';
import { TrialsTicketTooltipContent } from "../Items/Tooltip/TrialsTicketTooltipContent";
import styles from "./TrialsTicket.module.scss";

interface ITrialsTicketProps {
	className?: string;
	ticket: DestinyTrialsTicket;
	hideTooltip?: boolean;
}

const TrialsTicket: React.FC<ITrialsTicketProps> = ({
	className,
	ticket,
	hideTooltip
}) => {
	const [tooltipVisible, setTooltipVisible] = useState(false);
	const [pubSubData, setPubSubData] = useState(PubSubDataStore.state);

	const defs = useDefsEffect(
		ticket,
		(oldVal, newVal) => oldVal?.TicketItemHash !== newVal.TicketItemHash,
		TrialsTicketDefinitionFetcher.create(ticket)
	);

	useMountEffect(() => {
		const destroys = [
			PubSubDataStore.observe(setPubSubData)
		];

		return () => destroys.forEach(d => d());
	});

	if (!ticket || !defs?.ticketItem || ticket.TicketItemHash === 0 || !pubSubData.isPlayingTrials)
		{
			const username = pubSubData.twitchContext?.playerChannel;
			const label = pubSubData.isPlayingTrials
				? Localizer.Format(Localizer.Twitchext.UsernameHasNoTrialsPassage, { username })
				: Localizer.Format(Localizer.Twitchext.NotPlayingTrials, { username });
				
	
			return (
				<div>
					<div className={styles.titleWrapper}>
						<div className={styles.title}>
							{Localizer.Twitchext.TrialsPassage}
						</div>
						<div className={styles.subtitle}>
							{label}
						</div>
					</div>
				</div>
			);
		}
	 
	const allObjectiveDefs = Object.values(defs?.objectiveDefs ?? {});
	const winsDef = allObjectiveDefs?.find(a => a.completedValueStyle === DestinyUnlockValueUIStyle.GreenPips);

	const winsTotal = winsDef?.completionValue ?? 8;
	const flawless = ticket.LossCount < 1;
	const showFlawlessSection = ConfigUtils.SystemStatus("Destiny2TwitchExtUI_ShowFlawlessPips");

	const winsValues = [...Array(winsTotal)].map((_, i) => ticket.WinCount >= (i + 1));

	return (
		<div
			className={classNames(styles.ticket, className)}
			onMouseOver={() => setTooltipVisible(true)}
			onMouseLeave={() => setTooltipVisible(false)}
		>
			<div className={styles.titleWrapper}>
				<div className={styles.title}>
					{defs?.ticketItem?.itemTypeDisplayName}
				</div>
				<div className={styles.subtitle}>
					{defs?.ticketItem?.displayProperties?.name}
				</div>
			</div>
			<div className={styles.winsLosses}>
				<p className={styles.winTitle}>{Localizer.historicalstats.StatName_activitiesWon}</p>
				<div className={styles.wins}>
					{winsValues.map((pipOn, i) =>
						<div key={i} className={classNames(styles.pip, styles.winPip, { [styles.pipOn]: pipOn })} />
					)}
				</div>
				{
					showFlawlessSection &&
					<>
						<p className={styles.winTitle}>
							{allObjectiveDefs?.[2]?.progressDescription}
						</p>
						<div className={styles.losses}>
							<div style={{ backgroundImage: flawless ? "" : `url(trials-loss-icon.png)` }} className={classNames(styles.pip, styles.winPip, { [styles.pipOn]: flawless })} />
						</div
						>
					</>
				}
			</div>
			{!hideTooltip &&
				<Tooltip visible={tooltipVisible} position={"auto"} distance={20}>
					<TrialsTicketTooltipContent ticket={ticket} definitions={defs} />
				</Tooltip>
			}
		</div>
	);
}

export default TrialsTicket;