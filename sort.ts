import type { maybe, maybe_undefined } from '@ctx-core/function'
import type { compare_type } from './compare_type'
/**
 * Sort items in `a1` by the `compare` function
 */
export function sort</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(a1: I[], compare?: compare_type<I>): O {
	return a1.sort(compare) as O
}
export function maybe_sort</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	maybe_a1: maybe<I[]>,
	compare?: compare_type<I>
): maybe_undefined<O> {
	return maybe_a1 ? sort<I>(maybe_a1 as I[], compare) as O : undefined
}
