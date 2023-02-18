import { wrap_concat } from '@ctx-core/function'
import { isArray } from '@ctx-core/object'
/** @typedef {import('@ctx-core/function').wrap_a_T2}wrap_a_T2 */
/**
 * Flattens the a & it's children into an array without chunks
 * @param a{wrap_a_T2}
 * @returns {unknown[]}
 */
export function flatten(a) {
	return (
		a.reduce((previous_val, current_val)=>
				wrap_concat(
					previous_val,
					...isArray(current_val)
						 ? flatten(current_val)
						 : [current_val]),
			[]))
}
/**
 * @param in_a{wrap_a_T2}
 * @param or{unknown[]|null|undefined}
 * @returns {unknown[]|null|undefined}
 */
export function maybe_flatten(in_a, or = null) {
	if (!in_a) return or
	return flatten(in_a)
}
export { flatten as flatten__a1, }
