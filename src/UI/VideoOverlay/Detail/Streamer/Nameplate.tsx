import deepEqual from 'deep-equal';
import { DestinyGender } from "Global/Contracts/BnetPlatform.TSEnum";
import { DestinyActiveCharacterSummary } from "Global/Contracts/Proto/DestinyActiveCharacterSummary";
import { BnetImage, useDefsEffect } from "Global/Utils/Helpers";
import React, { useState } from "react";
import { Tooltip } from 'UI/Controls/Tooltip';
import PubSubDataStore from '../../../../Global/DataStore/PubSubDataStore';
import { NameplateDefinitionFetcher, powerLevelHash } from '../../../../Global/Utils/DefinitionUtils';
import { useMountEffect } from '../../../../Global/Utils/Helpers';
import styles from "./Nameplate.module.scss";

interface INameplateProps
{
	character: DestinyActiveCharacterSummary;
}

const Nameplate: React.FC<INameplateProps> = ({ character }) =>
{
	const [pubSubData, setPubSubData] = useState(PubSubDataStore.state);
	const [emblemTooltipVisible, setEmblemTooltipVisible] = useState(false);

	useMountEffect(() => {
		const destroys = [
			PubSubDataStore.observe(setPubSubData)
		];

		return destroys.forEach(d => d());
	});

	const defs = useDefsEffect(
		character,
		(oldVal, newVal) => !deepEqual(oldVal, newVal),
		NameplateDefinitionFetcher.create(character)
	);

	if (!defs || !defs.emblemDef)
	{
		return null;
	}

	const {
		classDef,
		emblemDef,
		genderDef,
		raceDef
	} = defs;

	const powerLevel = character.CharacterStats?.find(a => a.Hash === powerLevelHash);

	const genderTypeString = DestinyGender[genderDef?.genderType ?? DestinyGender.Unknown];

	const classDisplayName = classDef?.genderedClassNames?.[genderTypeString];
	const raceDisplayName = raceDef?.genderedRaceNames?.[genderTypeString];

	return (
		<div className={styles.nameplate}>
			<div className={styles.background} style={{
				backgroundImage: `url(${BnetImage(emblemDef.secondarySpecial)})`
			}} />
			<div className={styles.content}>
				<div className={styles.avatar} style={{
					backgroundImage: `url(${BnetImage(emblemDef.secondaryOverlay)})`
				}} onMouseOver={() => setEmblemTooltipVisible(true)} onMouseLeave={() => setEmblemTooltipVisible(false)} />
				<div className={styles.about}>
					<div className={styles.displayName}>
						{pubSubData.twitchContext?.playerChannel}
					</div>
					<div className={styles.raceGender}>
						{classDisplayName} {'//'} {raceDisplayName}
					</div>
				</div>
				<div className={styles.power}>
					{powerLevel?.Value}
				</div>
			</div>
			<Tooltip visible={emblemTooltipVisible} position={"tr"} distance={10} classNames={{
				tooltip: styles.emblemTooltip
			}}>
				{emblemDef.displayProperties.name}
			</Tooltip>
		</div>
	);
};

export default Nameplate;