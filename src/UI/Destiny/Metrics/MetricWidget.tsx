import deepEqual from 'deep-equal';
import { Localizer } from 'Global/Localizer/Localizer';
import { IMetricWidgetDefinitions, MetricWidgetDefinitionFetcher } from 'Global/Utils/DefinitionUtils';
import React, { useState } from 'react';
import { Tooltip } from 'UI/Controls/Tooltip';
import { DestinyMetricDefinition } from '../../../Global/Contracts/BnetPlatform.TSDefinitions';
import { DestinyMetric } from '../../../Global/Contracts/Proto/DestinyMetric';
import { useDefsEffect } from '../../../Global/Utils/Helpers';
import styles from "./MetricWidget.module.scss";

interface IMetricWidgetProps
{
	metrics: DestinyMetric[];
}

const MetricWidget: React.FC<IMetricWidgetProps> = ({ metrics }) =>
{
	const prominentStats: number[] = [1114483243, 2367472811, 957196641];

	//raw hashes for metrics that should be in each category
	//const lifetimeStats: number[] = [1365664208, 1765255052];
	//const seasonalStats: number[] = [2367472811, 957196641, 1114483243, 3364207969, 128083325, 610393611];
	//const weeklyStats: number[] = [3046315288, 3787323274];

	const seasonalTraitHash = 2230116619;
	const weeklyTraitHash = 2356777566;
	const lifetimeTraitHash = 4263853822;

	const [tooltipVisible, setTooltipVisible] = useState(false);

	const defs = useDefsEffect(
		metrics,
		(oldValue, newValue) => !deepEqual(oldValue, newValue),
		MetricWidgetDefinitionFetcher.create(metrics)
	);

	const getMetricSet = (metrics: DestinyMetric[], defs: IMetricWidgetDefinitions | null | undefined, statHashes: number[]): DestinyMetric[] =>
	{
		return metrics.filter(m => m.MetricHash in (defs?.metrics ?? {})).filter(m => statHashes.includes(m.MetricHash))
	};

	const getMetricSetForTrait = (metrics: DestinyMetric[], defs: IMetricWidgetDefinitions | null | undefined, traitHash: number): DestinyMetric[] =>
	{
		const defsWithTraitHash = Object.values(defs?.metrics ?? {})
			.filter((value) => value.traitHashes.includes(traitHash))
			.map(v => v.hash);

		return getMetricSet(metrics, defs, defsWithTraitHash);
	};

	const prominentStatMetricsWithDefs = getMetricSet(metrics, defs, prominentStats);
	const lifetimeStatMetricsWithDefs = getMetricSetForTrait(metrics, defs, lifetimeTraitHash);
	const seasonalStatMetricsWithDefs = getMetricSetForTrait(metrics, defs, seasonalTraitHash);
	const weeklyStatMetricsWithDefs = getMetricSetForTrait(metrics, defs, weeklyTraitHash);

	const additionalStatsHeader = Localizer.Twitchext.AdditionalStats;
	const lifetimeHeader = Localizer.Twitchext.Lifetime;
	const seasonalHeader = Localizer.Twitchext.Seasonal;
	const weeklyHeader = Localizer.Twitchext.Weekly;

	return (
		<div className={styles.wrapper}
			onMouseOver={() => { setTooltipVisible(true) }}
			onMouseLeave={() => { setTooltipVisible(false) }}
		>
			<div className={styles.titleWrapper}>
				<div className={styles.title}>
					{Localizer.Twitchext.StatsTitle}
				</div>
				<div className={styles.subtitle}>
					{Localizer.Twitchext.StatsSubtitle}
				</div>
			</div>

			{
				prominentStatMetricsWithDefs.map((metric, i) => (
					<Metric
						key={i}
						metric={metric}
						def={defs?.metrics?.[metric.MetricHash]}
					/>
				))
			}

			<Tooltip visible={tooltipVisible} position={"auto"} distance={20}>
				<div className={styles.tooltipMetrics}>
					<h4>{additionalStatsHeader}</h4>
					<div className={styles.additionalStats}>
						<h5>{lifetimeHeader}</h5>
						{lifetimeStatMetricsWithDefs.map((metric, i) => (
							<Metric
								key={i}
								metric={metric}
								def={defs?.metrics?.[metric.MetricHash]}
							/>
						))}
						<h5>{seasonalHeader}</h5>
						{seasonalStatMetricsWithDefs.map((metric, i) => (
							<Metric
								key={i}
								metric={metric}
								def={defs?.metrics?.[metric.MetricHash]}
							/>
						))}
						<h5>{weeklyHeader}</h5>
						{weeklyStatMetricsWithDefs.map((metric, i) => (
							<Metric
								key={i}
								metric={metric}
								def={defs?.metrics?.[metric.MetricHash]}
							/>
						))}
					</div>
				</div>

			</Tooltip>
		</div>
	);
}

interface IMetricProps
{
	metric: DestinyMetric;
	def: DestinyMetricDefinition | undefined;
}

const Metric: React.FC<IMetricProps> = ({
	def,
	metric
}) =>
{
	return (
		<div className={styles.metric}>
			<div className={styles.name}>{def?.displayProperties?.name}</div>
			<div className={styles.value}>{metric.MetricValue}</div>
		</div>
	);
}

export default MetricWidget;