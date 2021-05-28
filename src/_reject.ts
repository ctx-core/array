import type { maybe } from '@ctx-core/function'
import type { _is_match_T } from './_is_match_T'
import { maybe_reject, reject } from './reject'
/**
 * Returns function that returns value from [reject](#reject) with `fn` argument.
 */
export function _reject</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	_is_match: _is_match_T<I>
): (a1: I[]) => O {
	return a1 => reject<I, O>(a1, _is_match) as O
}
export function _maybe_reject</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	_is_match: _is_match_T<I>
): (a1: maybe<I[]>) => maybe<O, undefined> {
	return a1 => maybe_reject<I, O>(a1, _is_match) as maybe<O, undefined>
}
export {
	_reject as _fn__reject,
}
