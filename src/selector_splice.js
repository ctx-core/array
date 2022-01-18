/**
 * splice out any `array` elements matching `selector`
 */
export function selector_splice(a, selector) {
	const index = a.findIndex(selector)
	if (index > -1) {
		a.splice(index, 1)
	}
	return a
}
export { selector_splice as splice__selector, selector_splice as splice__selector__a1, }
