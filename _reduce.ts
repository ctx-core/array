import type { maybe } from '@ctx-core/function'
import { maybe_reduce, reduce, reduce_fn_type } from './reduce'
/**
 * Return Function that returns from `reduce` with `fn` and factory `_memo(a1)`.
 */
export function _reduce<I, O = unknown>(
	fn:reduce_fn_type<I, O>,
	_memo:_memo_type<I, O>
):(a1:I[], memo:O)=>O {
	return (
		(a1:I[], memo:O)=>
			reduce<I, O>(a1, fn,
				memo == null
				? _memo && (_memo as _memo_type<I, O>)(a1)
				: memo
			) as O
	)
}
export const _fn__reduce = _reduce
export type _memo_type<I, O = unknown> = (a1:I[])=>O
export function _maybe_reduce<I, O = unknown>(
	fn:reduce_fn_type<I, maybe<O>>,
	_memo:maybe<_memo_type<I, O>>
):(a1:I[], memo:O)=>O {
	return (
		(a1:I[], memo:O)=>
			maybe_reduce<I, maybe<O>>(a1, fn,
				memo == null
				? _memo && (_memo as _memo_type<I, O>)(a1)
				: memo
			) as O
	)
}