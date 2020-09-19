import type { compare_type } from './compare_type'
import { maybe_sort, sort } from './sort'
import { maybe_slice, slice } from './slice'
import type { maybe, maybe_undefined } from '@ctx-core/function'
/**
 * Sorts a copy of `a1` by the `compare` function.
 */
export function _sort_a1<I extends unknown[]>(
	a1:I,
	compare?:compare_type<I[number]>
):I {
	return sort<I>(slice<I>(a1, 0), compare)
}
export const _a1__sort = _sort_a1
export function _maybe_sort_a1<I extends unknown[]>(
	maybe_a1:maybe<I>,
	compare?:compare_type<I[number]>
):maybe_undefined<I> {
	return maybe_sort<I>(maybe_slice<I>(maybe_a1, 0), compare)
}
