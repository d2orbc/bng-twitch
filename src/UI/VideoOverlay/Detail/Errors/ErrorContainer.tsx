import classNames from "classnames";
import { ErrorDataStore} from "Global/DataStore/ErrorDataStore";
import { useMountEffect } from "Global/Utils/Helpers";
import React, { useState } from "react";
import styles from "./ErrorContainer.module.scss";
import { ErrorItem } from "./ErrorItem";

interface IErrorContainerProps {
	bigViewOpen: boolean;
	rightAligned: boolean;
}

/** Render all errors, dismissably, but only show one at a time */
export const ErrorContainer: React.FC<IErrorContainerProps> = ({ bigViewOpen, rightAligned }) => {
	const [errors, setErrors] = useState(ErrorDataStore.state.errors);

	useMountEffect(() => {
		ErrorDataStore.observe((data) => {
			setErrors(data.errors);
		});
	});

	const classes = classNames(styles.errorContainer, {
		[styles.open]: bigViewOpen,
		[styles.right]: rightAligned,
	});

	return (
		<div className={classes}>
			{errors.slice(0, 1).map((errorDisplay) => (
				<ErrorItem errorDisplay={errorDisplay} />
			))}
		</div>
	);
};
