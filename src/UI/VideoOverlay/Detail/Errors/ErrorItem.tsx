import classNames from "classnames";
import { ErrorDataStore, IErrorDisplay } from "Global/DataStore/ErrorDataStore";
import { Environments } from "Global/EBS/ebs";
import { Localizer } from "Global/Localizer/Localizer";
import { DetailedError } from "Global/Utils/CustomErrors";
import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { WithEmojis } from "UI/Shared/WithEmojis";
import EBS from '../../../../Global/EBS/ebs';
import styles from "./ErrorItem.module.scss";

export interface IErrorItemProps
{
	errorDisplay: IErrorDisplay;
	className?: string;
}

export const ErrorItem: React.FC<IErrorItemProps> = (props) =>
{
	const errorDisplay = props.errorDisplay;

	const error = errorDisplay.error;
	let title = error.message;
	let desc: string | null = null;

	if (error instanceof DetailedError)
	{
		title = error.title;
		desc = error.message;
	}

	const classes = classNames(
		styles.error,
		props.className,
		{
			[styles.adding]: errorDisplay.adding,
			[styles.removing]: errorDisplay.removing
		});

	let errorLink = `${Environments[EBS.env + "Bnet"]}/${Localizer.CurrentCultureName}/twitch-ext/help`;
	if (errorDisplay.stringKey)
	{
		errorLink = `${errorLink}?target=${errorDisplay.stringKey}`;
	}

	const removeError = (e: IErrorDisplay) => ErrorDataStore.remove(e);

	return (
		<div className={classes} key={errorDisplay.guid}>
			<a href={errorLink} target="_blank" rel="nofollow noopener noreferrer" className={styles.errorMessage}>
				<div className={styles.title}>
					<WithEmojis>{title}</WithEmojis>
				</div>
				<div className={styles.desc}>
					<WithEmojis>{desc}</WithEmojis>
				</div>
			</a>
			<div className={styles.icons}>
				{!errorDisplay.preventClose && (
					<FaWindowClose onClick={() => removeError(errorDisplay)} className={styles.icon} />
				)}
			</div>
		</div>
	);
}