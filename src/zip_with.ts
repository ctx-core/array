import type { wrap_a2_item_T } from '@ctx-core/function'
/**
 * Returns 2d Array where each item being the return value of `fn` given the index value for each Array in `wrap_a2_T`.
 */
export function zip_with</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	a2:I[][],
	fn?:zip_width_fn_T<I>
):O {
	if (!fn) fn = _default_zipWith_fn<I>()
	const a = a2[0]
	const rest_a2 = a2.slice(1)
	const zip_with_a = [] as I[]
	for (let i = 0; i < a.length; i++) {
		const arg_a = [a[i]] as I[]
		for (let j = 0; j < rest_a2.length; j++) {
			arg_a.push(
				rest_a2[j][i]
			)
		}
		zip_with_a.push(
			fn.call(zip_with_a, arg_a, i)
		)
	}
	return zip_with_a as O
}
export function maybe_zip_with</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	a2:I[][],
	fn?:zip_width_fn_T<I>
):O|undefined {
	if (!a2) return
	return zip_with<I>(a2, fn) as O
}
export function _default_zipWith_fn</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/() {
	return ((a:I[], _i:number)=>a as O) as zip_width_fn_T<I>
}
export type zip_width_fn_T<I extends unknown = unknown> =
	(a:I[], i:number)=>I
export type zip_with_fn_T<I> =
	(arg_a:wrap_a2_item_T<I>[], i:number)=>wrap_a2_item_T<I>
export {
	zip_with as zipWith,
	maybe_zip_with as maybe_zipWith,
}
