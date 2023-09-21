import classNames from "classnames";
import React from "react";
import styles from "./ItemIcon.module.scss";

interface IItemIconBasicProps extends React.HTMLProps<HTMLDivElement>
{
	statNumber?: number;
	iconPath: string;
	isSubclass?: boolean;
}

/** Render an item icon, completely devoid of logic. */
export const ItemIconBasic: React.FC<IItemIconBasicProps> = ({
	iconPath,
	statNumber,
	isSubclass,
	className,
	...rest
}) =>
{
	const wrapperClassnames = classNames(styles.iconWrapper, className, {
		[styles.isSubclass]: isSubclass
	});

	return (
		<div className={wrapperClassnames} {...rest}>
			<div
				className={styles.icon}
				style={{
					backgroundImage: `url(${iconPath})`,
				}}
			/>
			{statNumber !== undefined &&
				<div className={styles.power}>
					{statNumber}
				</div>
			}
		</div>
	);
}