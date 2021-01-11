import type { maybe } from '@ctx-core/function'
import type { _is_match_type } from './_is_match_type'
import { maybe_reject, reject } from './reject'
/**
 * Returns function that returns value from [reject](#reject) with `fn` argument.
 */
export function _reject</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	_is_match: _is_match_type<I>
): (a1: I[]) => O {
	return a1 => reject<I, O>(a1, _is_match) as O
}
export function _maybe_reject</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	_is_match: _is_match_type<I>
): (a1: maybe<I[]>) => maybe<O, undefined> {
	return a1 => maybe_reject<I, O>(a1, _is_match) as maybe<O, undefined>
}
export {
	_reject as _fn__reject,
}
