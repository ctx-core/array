/**
 * splice out any `array` elements matching `selector`
 */
export function selector_splice(a1:unknown[], selector:(any, number, a1)=>unknown):unknown[] {
	const index = a1.findIndex(selector)
	if (index > -1) {
		a1.splice(index, 1)
	}
	return a1
}
export {
	selector_splice as splice__selector,
	selector_splice as splice__selector__a1,
}
