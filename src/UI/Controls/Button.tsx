import classNames from "classnames";
import React, { DOMAttributes } from "react";
import styles from "./Button.module.scss";
import { ReactNode } from 'react';
import { Spinner } from "./Spinner";

export type ButtonTypes = "none" | "white" | "gold" | "red" | "blue" | "clear" | "text" | "disabled" | "darkblue" | "green" | "teal" | "darkorange";

export type ButtonProps = IButtonProps & Partial<DefaultProps>;

export interface IButtonProps extends DOMAttributes<HTMLElement>
{
	/** Children */
	children: React.ReactNode;
	/** Render in icon slot */
	icon?: React.ReactNode;
	/** Additional styles */
	style?: React.CSSProperties;
	/** Additional className */
	className?: string;
	/** If not null, Button will be treated as an internal link (note: cannot specify an external link here) */
	url?: string;
	/** If true, the 'to' prop will be treated as a legacy link */
	legacy?: boolean;
	/** Only relevant if url is populated. If false, opens in a new tab. */
	sameTab?: boolean;
}

interface DefaultProps
{
	/** Button type */
	buttonType: ButtonTypes | ButtonTypes[];
	/** If true, shows a loading spinner */
	loading: boolean;
	/** If true, won't be clickable */
	disabled: boolean;
	/** Button size */
	size: "Tiny" | "Small" | "Medium" | "Large";
}

type Props = IButtonProps & DefaultProps;

export class Button extends React.Component<Props>
{
	public static defaultProps = {
		buttonType: "white",
		loading: false,
		disabled: false,
		size: "Medium"
	};

	private readonly onKeyDown = (e: React.KeyboardEvent<HTMLElement>) =>
	{
		if (this.props.disabled)
		{
			e.preventDefault();

			return false;
		}
	}

	public render()
	{
		const {
			icon,
			loading,
			disabled,
			size,
			buttonType,
			children,
			className,
			url,
			...rest
		} = this.props;

		let iconRendered: ReactNode | undefined;
		if (icon || loading)
		{
			iconRendered = loading
				? <Spinner inline={true} style={{ margin: "-0.5rem 0 0 -0.5rem" }} />
				: icon;
		}

		const hasIcon = iconRendered ? "has-icon" : "";

		const sizeClass = styles[size.toLocaleLowerCase()];

		const stylesFromButtonType = buttonType instanceof Array
			? buttonType.map(bt => styles[bt])
			: styles[buttonType];

		const buttonStyle = disabled
			? styles.disabled
			: stylesFromButtonType;

		const classes = classNames(
			className,
			styles.button,
			{
				[styles.disabled]: loading || disabled,
			},
			sizeClass,
			buttonStyle,
			"button"
		);

		const inner = (
			<React.Fragment>
				{hasIcon &&
					<div className={classNames(styles.iconWrapper, { [styles.hasIcon]: !!iconRendered })}>
						{iconRendered}
					</div>
				}
				{children}
			</React.Fragment>
		);

		const props = {
			...rest,
			url,
			className: classes
		};


		return url
			? <a {...props} href={url} onKeyDown={this.onKeyDown} target={"_blank"} rel="noopener noreferrer">{inner}</a>
			: <div {...props} onKeyDown={this.onKeyDown}>{inner}</div>;
	}
}
