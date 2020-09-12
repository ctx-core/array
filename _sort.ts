import type { falsy } from '@ctx-core/function'
import type { compare_type } from './compare_type'
import { sort } from './sort'
/**
 * Returns a Function that calls [sort](#sort) with the given `compare` function.
 */
export function _sort(compare?:compare_type):(a1:falsy|any[])=>undefined|any[] {
	return a1=>sort(a1, compare)
}
export const _fn__sort = _sort
