import type { maybe, maybe_undefined } from '@ctx-core/function'
/**
 * Calls splice on a1
 */
export function splice</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	a1: I[],
	start: number,
	delete_count?: number,
	...arg_a1: I[]
): O {
	return a1.splice(start, delete_count as number, ...arg_a1) as O
}
export function maybe_splice</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	maybe_a1: maybe<I[]>,
	start: number,
	delete_count?: number,
	...arg_a1: I[]
): maybe_undefined<O> {
	return (
		maybe_a1
		? splice<I>(maybe_a1 as I[], start, delete_count, ...arg_a1) as O
		: undefined
	)
}
