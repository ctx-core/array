import { maybe_sort, sort } from '../sort/index.js'
/** @typedef {import('../_types').compare_T} */
/**
 * Returns a Function that calls [sort](#sort) with the given `compare` function.
 * @param compare{compare_T}
 * @returns {(a:unknown[])=>unknown[]}
 * @private
 */
export function sort_(compare) {
	return a=>sort(a, compare)
}
/**
 * @param compare{compare_T}
 * @param or{unknown[]|null|undefined}
 * @returns {(maybe_a:unknown[]|undefined)=>unknown[]|null|undefined}
 */
export function maybe_sort_(compare, or = null) {
	return maybe_a=>maybe_sort(maybe_a, compare, or)
}
export {
	sort_ as _sort,
	sort_ as _fn__sort,
	maybe_sort_ as _maybe_sort,
}
