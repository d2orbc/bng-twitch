const el = document.createElement("div");
const computed = getComputedStyle(el);

/** Test if browser supports CSS value. cssPropName must be camelCase. validTestValue must be a value that prop could possibly be. */
const cssSupports = (cssPropName: string) =>
{
	return cssPropName in computed;
};

export const supportsBackdropFilter = () => cssSupports("backdropFilter") || cssSupports("webkitBackdropFilter");