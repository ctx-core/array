import type { maybe, maybe_undefined } from '@ctx-core/function'
/**
 * Calls slice on a1
 */
export function slice</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	a1: I[], begin_idx?: number, end_idx?: number
): O {
	return a1.slice(begin_idx, end_idx) as O
}
export function maybe_slice</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	maybe_a1: maybe<I[]>, begin_idx?: number, end_idx?: number
): maybe_undefined<O> {
	return (
		maybe_a1
		? slice<I>(maybe_a1 as I[], begin_idx, end_idx) as O
		: undefined
	)
}
