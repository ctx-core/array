/**
 * Calls splice on a
 */
export function splice</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	a:I[],
	start:number,
	delete_count?:number,
	...arg_a:I[]
):O {
	return a.splice(start, delete_count as number, ...arg_a) as O
}
export function maybe_splice</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	maybe_a:I[]|undefined,
	start:number,
	delete_count?:number,
	...arg_a:I[]
):O|undefined {
	return (
		maybe_a
		? splice<I>(maybe_a as I[], start, delete_count, ...arg_a) as O
		: undefined
	)
}
