import type { compare_T } from './compare_T.js'
import { maybe_sort, sort } from './sort.js'
/**
 * Returns a Function that calls [sort](#sort) with the given `compare` function.
 */
export function sort_<I extends unknown = unknown>(
	compare?:compare_T<I>
):(a:I[])=>I[] {
	return a=>sort<I>(a, compare)
}
export function maybe_sort_<I extends unknown = unknown>(
	compare?:compare_T<I>
):(maybe_a:I[]|undefined)=>I[]|undefined {
	return (maybe_a:I[]|undefined)=>maybe_sort<I>(maybe_a, compare)
}
export {
	sort_ as _sort,
	sort_ as _fn__sort,
	maybe_sort_ as _maybe_sort,
}
