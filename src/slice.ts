/**
 * Calls slice on a
 */
export function slice</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	a:I[], begin_idx?:number, end_idx?:number
):O {
	return a.slice(begin_idx, end_idx) as O
}
export function maybe_slice</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	maybe_a:I[]|undefined, begin_idx?:number, end_idx?:number
):O|undefined {
	return (
		maybe_a
		? slice<I>(maybe_a as I[], begin_idx, end_idx) as O
		: undefined
	)
}
