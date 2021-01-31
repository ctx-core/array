import type { maybe, maybe_undefined } from '@ctx-core/function'
/**
 * Reverses the order of items in `in_a1` by mutating `in_a1`.
 */
export function reverse</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(in_a1: I[]) {
	return in_a1.reverse() as O
}
export function maybe_reverse</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	maybe_a1: maybe<I[]>
): maybe_undefined<O> {
	return maybe_a1 ? reverse<I>(maybe_a1 as I[]) as O : void 0
}
