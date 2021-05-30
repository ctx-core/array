import type { compare_T } from './compare_T'
/**
 * Sort items in `a` by the `compare` function
 */
export function sort</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(a:I[], compare?:compare_T<I>):O {
	return a.sort(compare) as O
}
export function maybe_sort</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	maybe_a:I[]|undefined,
	compare?:compare_T<I>
):O|undefined {
	return maybe_a ? sort<I>(maybe_a as I[], compare) as O : undefined
}
