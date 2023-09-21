import React from "react";
import Twemoji from 'react-twemoji';
import styles from "./WithEmojis.module.scss";

/** Takes a string and replaces any emoji characters with Twitter's custom emojis (so they work on all platforms) */
export const WithEmojis: React.FC = ({ children }) => (
	<Twemoji options={{
		folder: 'svg',
		ext: '.svg',
		className: styles.emoji
	}}>
		{children}
	</Twemoji>
)