import { maybe_reduce, reduce, reduce_fn_T } from './reduce'
/**
 * Return Function that returns from `reduce` with `fn` and factory `memo_(a)`.
 */
export function reduce_</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = unknown
>/*@formatter:on*/(
	fn: reduce_fn_T<I, O>,
	memo_: memo_fn_T<I, O>
): (a: I[], memo: O) => O {
	return (
		(a: I[], memo: O) =>
			reduce<I, O>(a, fn,
				memo == null
				? memo_ && (memo_ as memo_fn_T<I, O>)(a)
				: memo
			) as O
	)
}
export type memo_fn_T</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = unknown
>/*@formatter:on*/ = (a: I[]) => O
export function maybe_reduce_</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = unknown
>/*@formatter:on*/(
	fn: reduce_fn_T<I, O|undefined>,
	memo_fn: memo_fn_T<I, O>|undefined
): (a: I[], memo: O) => O {
	return (
		(a: I[], memo: O) =>
			maybe_reduce<I, O|undefined>(a, fn,
				memo == null
				? memo_fn && (memo_fn as memo_fn_T<I, O>)(a)
				: memo
			) as O
	)
}
export { 
	reduce_ as _reduce,
	reduce_ as _fn__reduce,
	maybe_reduce_ as _maybe_reduce,
}
