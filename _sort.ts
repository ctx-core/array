import type { compare_type } from './compare_type'
import { sort } from './sort'
import type { maybe } from '@ctx-core/function'
/**
 * Returns a Function that calls [sort](#sort) with the given `compare` function.
 */
export function _sort<I = unknown>(
	compare?:compare_type<I>
):(a1:maybe<I[]>)=>maybe<I[], undefined> {
	return a1=>sort<I>(a1, compare)
}
export const _fn__sort = _sort
