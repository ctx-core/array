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
export const splice__selector = selector_splice
export const splice__selector__a1 = splice__selector
