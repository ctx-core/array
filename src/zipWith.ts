import type { maybe_undefined, wrap_a2_item_type } from '@ctx-core/function'
/**
 * Returns 2d Array where each item being the return value of `fn` given the index value for each Array in `wrap_a2_type`.
 */
export function zipWith</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	a2: I[][],
	fn?: zipWidth_fn_type<I>
): O {
	if (!fn) fn = _default_zipWith_fn<I>()
	const a1 = a2[0]
	const rest_a2 = a2.slice(1)
	const zipWith_a2 = [] as I[][]
	for (let i = 0; i < a1.length; i++) {
		const arg_a1 = [a1[i]] as I[]
		for (let j = 0; j < rest_a2.length; j++) {
			arg_a1.push(
				rest_a2[j][i]
			)
		}
		zipWith_a2.push(
			fn.call(zipWith_a2, arg_a1, i)
		)
	}
	return zipWith_a2 as O
}
export function maybe_zipWith</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	a2: I[][],
	fn?: zipWidth_fn_type<I>
): maybe_undefined<O> {
	if (!a2) return
	return zipWith<I>(a2, fn) as O
}
export function _default_zipWith_fn</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/() {
	return ((a1: I[], _i: number) => a1 as O) as zipWidth_fn_type<I>
}
export type zipWidth_fn_type<I extends unknown = unknown> =
	(a1: I[], i: number) => I[]
export type zipWith_fn_type<I> =
	(arg_a1: wrap_a2_item_type<I>[], i: number) => wrap_a2_item_type<I>
