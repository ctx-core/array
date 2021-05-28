import type { maybe, maybe_undefined } from '@ctx-core/function'
import type { compare_T } from './compare_T'
import { maybe_sort, sort } from './sort'
/**
 * Returns a Function that calls [sort](#sort) with the given `compare` function.
 */
export function _sort<I extends unknown = unknown>(
	compare?:compare_T<I>
):(a1:I[])=>I[] {
	return a1=>sort<I>(a1, compare)
}
export function _maybe_sort<I extends unknown = unknown>(
	compare?:compare_T<I>
):(maybe_a1:maybe<I[]>)=>maybe_undefined<I[]> {
	return (maybe_a1: maybe<I[]>)=>maybe_sort<I>(maybe_a1, compare)
}
export {
	_sort as _fn__sort,
}
