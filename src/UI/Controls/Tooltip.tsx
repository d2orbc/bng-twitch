// Created by jlauer, 2019
// Copyright Bungie, Inc.

import classNames from "classnames";
import * as React from "react";
import ReactDOM from "react-dom";
import { TooltipPortalContainer } from '../VideoOverlay/VideoOverlay';
import styles from "./Tooltip.module.scss";

interface XY
{
	x: number;
	y: number;
}

export type TooltipPosition = "auto" | "l" | "tl" | "t" | "tr" | "r" | "br" | "b" | "bl";

interface ClassNames
{
	tooltip: string;
	container: string;
}

interface ITooltipProps
{
	/** Whether the tooltip is visible */
	visible: boolean;

	/** If provided, anchor the tooltip to this element instead of the cursor */
	anchor?: React.RefObject<any>;

	/** If provided, allows for custom positioning of the tooltip */
	customPosition?: (e?: MouseEvent) => XY;
}

interface DefaultProps
{
	/** Positioning for tooltip. t = top, b = bottom, l = left, r = right */
	position: TooltipPosition;

	/** Custom className for the tooltip itself */
	classNames: Partial<ClassNames>;

	/** Pixels away from the anchor to put the tooltip (in the direction specified) */
	distance: number;
}

type Props = ITooltipProps & DefaultProps;

export type TooltipProps = ITooltipProps & Partial<DefaultProps> & {
	children: React.ReactNode;
}

interface ITooltipState
{
	tipPosition: XY;
}

/** 
 * This takes an X and Y position, and determines which third of the screen the position should be. 
 * Calculates which 'third' the target is in (as 0, 1, or 2) for both the horizontal thirds and vertical thirds,
 * then converts those to top/bottom/left/right values for where the tooltip should be. This might seem
 * counterintuitive at first, because if something is in the rightmost third, the tooltip should be on the left,
 * so an X third value of 2 converts to "l" even though 2 is the right side of the screen.
*/
const xyThirdsMapper = (x: number, y: number): TooltipPosition =>
{
	// Map 'thirds' to positions
	const xThirdMap = {
		0: "r",
		1: "l", // we don't have a "center" value for the x one, so just default to left
		2: "l"
	};

	// Map 'thirds' to positions
	const yThirdMap = {
		0: "b",
		1: "",
		2: "t"
	}

	// Determine the size of one third
	const xThirds = window.innerWidth / 3;
	const yThirds = window.innerHeight / 3;

	// Convert position into the thirds value (e.g. if 1/3 of the screen is 200px, and X is 300, the result is 1 == center)
	const xThirdVal = Math.floor(x / xThirds);
	const yThirdVal = Math.floor(y / yThirds);

	return `${yThirdMap[yThirdVal]}${xThirdMap[xThirdVal]}` as TooltipPosition;
}

/**
 * Tooltip - Shows a tooltip. You can anchor the tooltip to another component or to the cursor.
 *  * 
 * @param {ITooltipProps} props
 * @returns
 */
export class Tooltip extends React.Component<Props, ITooltipState>
{
	private readonly tipRef = React.createRef<HTMLDivElement>();

	constructor(props: Props)
	{
		super(props);

		this.state = {
			tipPosition: { x: 0, y: 0 }
		};
	}

	public static defaultProps: DefaultProps = {
		position: "auto",
		classNames: {},
		distance: 20
	};

	private get base(): "anchor" | "cursor"
	{
		return this.props.anchor
			? "anchor"
			: "cursor";
	}

	private get anchorPos()
	{
		const anchor = this.props.anchor?.current ?? document.body;

		const anchorNode = ReactDOM.findDOMNode(anchor) as Element;

		return anchorNode.getBoundingClientRect();
	}

	public componentDidMount()
	{
		if (this.base === "cursor")
		{
			window.addEventListener("mousemove", this.onMouseMove);
		}
		else
		{
			this.positionTip();
		}
	}

	public componentWillUnmount()
	{
		if (this.base === "cursor")
		{
			window.removeEventListener("mousemove", this.onMouseMove);
		}
	}

	private readonly onMouseMove = (e: MouseEvent) =>
	{
		this.positionTip(e);
	}

	/** Get the final X and Y position of the tooltip */
	private getTipPosition(e?: MouseEvent)
	{
		const {
			position,
			distance
		} = this.props;

		const base = this.base;

		const newPos: XY = {
			x: 0,
			y: 0
		};

		const childPos = this.anchorPos;
		const tipPos = this.tipRef.current!.getBoundingClientRect();

		// If position is "auto", we'll set calcPosition to some other position based on the cursor or anchor location.
		let calcPosition = position;
		if (position === "auto")
		{
			const x = base === "cursor"
				? e?.pageX ?? 0
				: childPos.left;
			const y = base === "cursor"
				? e?.pageY ?? 0
				: childPos.top;

			calcPosition = xyThirdsMapper(x, y);
		}

		/** Determine position based on the ninth */
		switch (calcPosition)
		{
			case "bl":
			case "tl":
			case "l":
				newPos.x = e && base === "cursor"
					? e.clientX - tipPos.width
					: childPos.left - tipPos.width;
				newPos.x += -distance;
				break;
		}

		switch (calcPosition)
		{
			case "tr":
			case "r":
			case "br":
				newPos.x = e && base === "cursor"
					? e.clientX
					: childPos.right;
				newPos.x += distance;
				break;
		}

		switch (calcPosition)
		{
			case "tr":
			case "t":
			case "tl":
				newPos.y = e && base === "cursor"
					? e.clientY - tipPos.height
					: childPos.top - tipPos.height;
				newPos.y += -distance;
				break;
		}

		switch (calcPosition)
		{
			case "br":
			case "b":
			case "bl":
				newPos.y = e && base === "cursor"
					? e.clientY
					: childPos.top;
				newPos.y += distance;
				break;
		}

		switch (calcPosition)
		{
			case "t":
			case "b":
				newPos.x = e && base === "cursor"
					? e.clientX - (tipPos.width / 2)
					: childPos.left + (childPos.width / 2) - (tipPos.width / 2);
				break;
		}

		switch (calcPosition)
		{
			case "l":
			case "r":
				newPos.y = e && base === "cursor"
					? e.clientY - (tipPos.height / 2)
					: childPos.top + (childPos.height / 2) - (tipPos.height / 2);
				break;
		}

		newPos.y = Math.floor(Math.max(35, Math.min(newPos.y, window.innerWidth)));
        newPos.x = Math.floor(Math.max(0, Math.min(newPos.x, window.innerHeight))); 

		return newPos;
	}

	/** Determines where we get the tooltip position from */
	private positionTip(e?: MouseEvent)
	{
		if (!this.props.visible)
		{
			return;
		}

		const newPos = this.props.customPosition
			? this.props.customPosition(e)
			: this.getTipPosition(e);

		if (newPos)
		{
			this.setState({
				tipPosition: newPos
			});
		}
	}

	public render()
	{
		const base = this.base;

		const {
			container,
			tooltip
		} = this.props.classNames;

		const classes = classNames(
			styles.tooltip,
			tooltip,
			styles[this.props.position],
			{
				[styles.cursorBase]: base === "cursor",
				[styles.visible]: this.props.visible,
				[styles.textOnly]: typeof this.props.children === "string"
			});

		const { x, y } = this.state.tipPosition;

		const transform = `translateX(${x}px) translateY(${y}px)`;

		return ReactDOM.createPortal(
			<div className={classNames(styles.tooltipContainer, container)}>
				<div className={classes} style={{ transform }} ref={this.tipRef}>
					{this.props.children}
				</div>
			</div>,
			TooltipPortalContainer.current ?? document.createElement("div")
		);
	}
}