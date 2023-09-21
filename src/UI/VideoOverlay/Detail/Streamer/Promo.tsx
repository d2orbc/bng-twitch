import React from "react";
import styles from "./Promo.module.scss";
import { getBnetLocale } from "Global/Utils/Helpers";
import { Localizer } from "Global/Localizer/Localizer";

const Promo: React.FC = () =>
{
	// For this promo, we are not localizing for fr, zh-cht, zh-chs, so we will fall back to English for those locales. 
	const needsFallback = ["zh-chs", "ru"];
	const bannerImageEnding = needsFallback.includes( getBnetLocale().toString()) ? "en" : getBnetLocale();

	return (
		<a href={Localizer.twitchext.promoLink} target="blank" rel="noreferrer nofollow">
			<div className={styles.promo} style={{backgroundImage: `url("https://www.bungie.net/7/ca/destiny/twitchext/promos/${Localizer.twitchext.promoImageFolderPath}/${bannerImageEnding}.png")`}} />
		</a>
	);
}

export default Promo;