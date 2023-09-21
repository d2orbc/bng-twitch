import React from "react";
import { GoChevronLeft } from "react-icons/go";
import { Spinner } from 'UI/Controls/Spinner';
import DetailDataStore, { IDetailItem } from '../../../Global/DataStore/DetailDataStore';
import styles from "./DetailContainer.module.scss";

interface IDetailContainerProps
{
	detail: IDetailItem | undefined;
}

/** Shows detail screens. These are shown depending on the state of {DetailDataStore} */
const DetailContainer: React.FC<IDetailContainerProps> = (props) =>
{
	if (!props.detail)
	{
		return (
			<div className={styles.spinnerContainer}>
				<Spinner on={true} />
			</div>
		);
	}

	const clearDetail = () =>
	{
		DetailDataStore.clear();
	}

	const {
		children,
		title
	} = props.detail;

	return (
		<div className={styles.detail}>
			<div className={styles.title}>
				<div className={styles.back} onClick={clearDetail}>
					<GoChevronLeft />
				</div>
				<div className={styles.titleText}>{title}</div>
			</div>
			<div className={styles.body}>
				{children}
			</div>
		</div>
	);
}

export default DetailContainer;