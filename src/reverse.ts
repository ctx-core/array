/**
 * Reverses the order of items in `in_a` by mutating `in_a`.
 */
export function reverse</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(in_a:I[]):O {
	return in_a.reverse() as O
}
export function maybe_reverse</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	maybe_a:I[]|undefined
):O|undefined {
	return maybe_a ? reverse<I>(maybe_a as I[]) as O : void 0
}
