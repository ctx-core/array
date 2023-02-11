import { maybe_sort, sort } from '../sort/index.js'
/**
 * Returns a Function that calls [sort](#sort) with the given `compare` function.
 */
export function sort_(compare) {
	return a=>sort(a, compare)
}
export function maybe_sort_(compare, or = null) {
	return maybe_a=>maybe_sort(maybe_a, compare, or)
}
export {
	sort_ as _sort,
	sort_ as _fn__sort,
	maybe_sort_ as _maybe_sort,
}
