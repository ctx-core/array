import { concat, falsy } from '@ctx-core/function'
import { isArray } from '@ctx-core/object'
/**
 * Flattens the a1 & it's children into an a1 without chunks
 * @param {[]} a1
 * @returns {[]|falsy}
 */
export function flatten(a1:falsy|any[]):undefined|any {
	if (!a1) return
	return a1.reduce(
		(a, b)=>
			concat(
				a,
				isArray(b)
				? flatten(b)
				: b),
		[]
	)
}
export const flatten__a1 = flatten
