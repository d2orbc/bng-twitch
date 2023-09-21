import classNames from "classnames";
import React, { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import PubSubDataStore from "../../../Global/DataStore/PubSubDataStore";
import StreamerStateDataStore from "../../../Global/DataStore/StreamerStateDataStore";
import { useMountEffect } from "../../../Global/Utils/Helpers";
import styles from "./MiniView.module.scss";

interface IMiniViewProps {
	className?: string;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
	open: boolean;
	onToggle: () => void;
}

type Props = React.PropsWithChildren<IMiniViewProps>;

export const MiniView: React.FC<IMiniViewProps> = ({ className, onMouseEnter, onMouseLeave, children, open, onToggle }: Props) => {
	const [errorState, setErrorState] = useState<string | undefined>(undefined);
	const [streamerState, setStreamerState] = useState(StreamerStateDataStore.state);

	const positionSettings = streamerState.status?.Response?.unsafeBroadcasterSystemStatus.Settings;

	useMountEffect(() => {
		PubSubDataStore.observe((data) => setErrorState(data.errorData?.message));
		StreamerStateDataStore.observe((data) => setStreamerState(data));
	});

	const classes = classNames(styles.wrapper, className, styles[`${positionSettings?.horizontalPos}`], styles[`${positionSettings?.verticalPos}`], {
		[styles.hasError]: errorState !== null,
		[styles.open]: open,
	});

	const childrenClasses = classNames(styles.content, {
		[styles.hasChildren]: !!children,
	});

	return (
		<div className={classes} onClick={onToggle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			<div className={childrenClasses}>{children}</div>
			<div className={styles.border}>{open ? <GoChevronLeft /> : <GoChevronRight />}</div>
		</div>
	);
};
