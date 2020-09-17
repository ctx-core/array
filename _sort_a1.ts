import type { compare_type } from './compare_type'
import { sort } from './sort'
import { slice } from './slice'
import type { maybe } from '@ctx-core/function'
/**
 * Sorts a copy of `a1` by the `compare` function.
 */
export function _sort_a1<I = unknown>(
	a1:maybe<I[]>,
	compare?:compare_type
):maybe<I[], undefined> {
	return sort<I>(slice<I>(a1, 0), compare)
}
export const _a1__sort = _sort_a1
