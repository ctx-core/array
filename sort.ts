import type { compare_type } from './compare_type'
import type { maybe, maybe_undefined } from '@ctx-core/function'
/**
 * Sort items in `a1` by the `compare` function
 */
export function sort<I extends unknown = unknown>(
	a1:I[],
	compare?:compare_type<I>
):I[] {
	return a1.sort(compare)
}
export function maybe_sort<I extends unknown = unknown>(
	maybe_a1:maybe<I[]>,
	compare?:compare_type<I>
):maybe_undefined<I[]> {
	return maybe_a1 ? sort<I>(maybe_a1 as I[], compare) : undefined
}
