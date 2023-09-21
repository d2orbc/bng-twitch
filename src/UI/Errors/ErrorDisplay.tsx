import styles from "./ErrorDisplay.module.scss";
import React, { PropsWithChildren } from "react";

export const ErrorDisplay: React.FC<PropsWithChildren<{}>> = (props) => {
	return (
		<div className={styles.error}>
			<span>Error: </span> {props.children}
		</div>
	);
}