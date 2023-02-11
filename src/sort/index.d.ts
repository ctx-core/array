import type { compare_T } from '../_types'
/**
 * Sort items in `a` by the `compare` function
 */
export declare function sort<
	I extends unknown = unknown, O extends unknown = readonly I[]
>(
	a:readonly  I[], compare?:compare_T<I>
):O
export declare function maybe_sort<
	I extends unknown = unknown,
	O extends unknown = readonly I[],
	Or = null
>(
	maybe_a:readonly I[]|undefined,
	compare?:compare_T<I>,
	or?:Or
):O|Or
