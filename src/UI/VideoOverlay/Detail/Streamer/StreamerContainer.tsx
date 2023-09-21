import { useMountEffect } from "Global/Utils/Helpers";
import React, { useState } from "react";
import MetricWidget from "UI/Destiny/Metrics/MetricWidget";
import TrialsTicket from "UI/Destiny/Trials/TrialsTicket";
import { DestroyCallback } from '../../../../Global/DataStore/DataStore';
import PubSubDataStore from '../../../../Global/DataStore/PubSubDataStore';
import { ConfigUtils } from '../../../../Global/Utils/ConfigUtils';
import { Equipment } from "./Equipment";
import Promo from "./Promo";
import styles from "./StreamerContainer.module.scss";


export const StreamerContainer: React.FC = () =>
{
	const [pubsubData, setPubsubData] = useState(PubSubDataStore.state);

	useMountEffect(() =>
	{
		let destroys: DestroyCallback[] = [
			PubSubDataStore.observe(data => setPubsubData(data))
		];

		return () => destroys.forEach(d => d());
	});

	const equipmentEnabled = ConfigUtils.SystemStatus("Destiny2TwitchExtUI_Equipment");
	const ticketEnabled = ConfigUtils.SystemStatus("Destiny2TwitchExtUI_TrialsPassages");
	const metricsEnabled = ConfigUtils.SystemStatus("Destiny2TwitchExtUI_Metrics");
	const promoEnabled = ConfigUtils.SystemStatus("Destiny2TwitchExtUI_Promo");

	const ticket = pubsubData.playerData?.ActiveDestinyCharacter?.DestinyTrialsTicket;
	const metrics = pubsubData.playerData?.ActiveDestinyCharacter?.Metrics;

	return (
		<div className={styles.streamerContainer}>
			{equipmentEnabled && (
				<React.Fragment>
					<Equipment
						className={styles.equipment}
						equipment={pubsubData.playerData?.ActiveDestinyCharacter?.Equipment ?? null}
						subclassSummary={pubsubData.playerData?.ActiveDestinyCharacter?.Subclass}
					/>
					<div className={styles.separator} />
				</React.Fragment>
			)}


			<div className={styles.ticketStats}>
				{ticketEnabled && ticket &&
					<TrialsTicket
						ticket={ticket}
					/>
				}

				{metricsEnabled && metrics &&
					<MetricWidget metrics={metrics} />
				}
			</div>

			{promoEnabled && (
				<React.Fragment>
					<div className={styles.separator} />
					<Promo />
				</React.Fragment>
			)}
		</div>
	);
}