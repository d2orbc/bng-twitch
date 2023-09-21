export const initGtm = (useGAScript) => (function (w, d, s, l, i)
{
	var prefix = useGAScript ? 'https://www.google-analytics.com/gtm/js?id=' : "https://www.googletagmanager.com/gtm.js?id=";
	w[l] = w[l] || [];
	w[l].push({
		'gtm.start': new Date().getTime(),
		event: 'gtm.js'
	});
	var f = d.getElementsByTagName(s)[0],
		j = d.createElement(s),
		dl = l !== 'dataLayer' ? '&l=' + l : '';
	j.async = true;
	j.src = prefix + i + dl; 
	f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-TNXR84T');