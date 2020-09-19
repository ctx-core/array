import type { compare_type } from './compare_type'
import { maybe_sort, sort } from './sort'
import type { maybe, maybe_undefined } from '@ctx-core/function'
/**
 * Returns a Function that calls [sort](#sort) with the given `compare` function.
 */
export function _sort<I extends unknown[]>(
	compare?:compare_type<I[number]>
):(a1:I)=>I {
	return a1=>sort<I>(a1, compare)
}
export const _fn__sort = _sort
export function _maybe_sort<I extends unknown[]>(
	compare?:compare_type<I[number]>
):(maybe_a1:maybe<I>)=>maybe_undefined<I> {
	return maybe_a1=>maybe_sort<I>(maybe_a1, compare)
}
