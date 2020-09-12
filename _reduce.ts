import type { falsy } from '@ctx-core/function'
import { reduce, reduce_fn_type } from './reduce'
/**
 * Return Function that returns from `reduce` with `fn` and factory `_memo(a1)`.
 * @param {function(*, *, number, Array)} fn
 * @param {function(Array)} _memo - Returns a `memo` for [reduce](#reduce)
 * @returns {function(Array, *): *}
 */
export function _reduce(fn:reduce_fn_type, _memo:falsy|_memo_type):any {
	return (
		(a1, memo)=>
			reduce(
				a1,
				fn,
				memo == null
				? _memo && _memo(a1)
				: memo
			)
	)
}
export const _fn__reduce = _reduce
export type _memo_type = (a1:any[])=>any
