import type { maybe } from '@ctx-core/function'
import { reduce, reduce_fn_type } from './reduce'
/**
 * Return Function that returns from `reduce` with `fn` and factory `_memo(a1)`.
 */
export function _reduce<I = unknown, O = unknown>(
	fn:reduce_fn_type<I, O>,
	_memo:maybe<_memo_type<I, O>>
):(a1: I[], memo: O) => O {
	return (
		(a1: I[], memo: O)=>
			reduce<I, maybe<O, unknown>>(a1, fn,
				memo == null
				? _memo && (_memo as _memo_type)(a1)
				: memo
			) as O
	)
}
export const _fn__reduce = _reduce
export type _memo_type<I = unknown, O = unknown> = (a1:I[])=>O
