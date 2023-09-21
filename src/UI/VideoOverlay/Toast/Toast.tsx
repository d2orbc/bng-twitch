import * as React from "react";
import classNames from "classnames";
import styles from "./Toast.module.scss";

interface DefaultProps
{
	/** Called when the toast is closed */
	onClose: () => void;
	/** If true, toast cannot be closed by a user (default false) */
	preventUserClose: boolean;
	/** Called when toast is clicked */
	onClick: () => void;
}

interface IToastProps
{
	/** Optional icon slot */
	icon?: React.ReactNode;
	/** If provided, toast will disappear after the timeout expires (in milliseconds) */
	timeout?: number;
	/** If not null, Button will be treated as an internal link (note: cannot specify an external link here) */
	url?: string;
}

interface ToastProps extends DefaultProps, IToastProps
{}

interface IToastState
{
	visible: boolean;
}

/**
 * Displays a toast 
 *  * 
 * @param {IToastProps} props
 * @returns
 */

export class Toast extends React.Component<ToastProps, IToastState>
{
	private readonly closeButtonRef = React.createRef<HTMLDivElement>();

	public static defaultProps: DefaultProps = {
		onClose: () => { void (0); },
		onClick: () => { void (0); },
		preventUserClose: false,
	};

	constructor(props: ToastProps)
	{
		super(props);

		this.state = {
			visible: true
		};
	}

	public componentDidMount()
	{
	}

	public close = () =>
	{
		this.setState({
			visible: false
		}, () =>
			{
				this.props.onClose();
			});
	}

	// On click, ensure we're not clicking on the close button. If we are, ignore the click function and preventDefault (in case it's a link)
	private readonly onClick = (e: React.MouseEvent) =>
	{
		const close = this.closeButtonRef.current;
		if (close === e.target || close?.contains(e.target as Node))
		{
			e.preventDefault();

			return false;
		}
		else
		{
			this.props.onClick();
		}
	}

	public render()
	{
		const {
			children,
			icon,
			url
		} = this.props;

		const {
			visible
		} = this.state;

		const closeButton = !this.props.preventUserClose && (
			<div className={styles.buttonClose} onClick={this.close} ref={this.closeButtonRef} style={{backgroundImage: "url(close_icon_white.png)"}} />
		);

		const inner = <div className={classNames(styles.toast, {[styles.visible]: visible}, {[styles.pointerHover]: url !== null})} onClick={this.onClick}>
			{icon &&
				<div className={styles.icon} style={{backgroundImage: `url(${icon})`}} />
			}
			<div className={styles.content}>
				{children}
			</div>
			{closeButton}
		</div>;

		return url
		? <a href={url} target={"_blank"} rel="noopener noreferrer">{inner}</a>
		: <div>{inner}</div>;
	}
}
