import type { maybe } from '@ctx-core/function'
import type { _is_match_type } from './_is_match_type'
import { maybe_reject, reject } from './reject'
/**
 * Returns function that returns value from [reject](#reject) with `fn` argument.
 */
export function _reject<I extends unknown = unknown>(
	_is_match:_is_match_type<I>
):(a1:I[])=>I[] {
	return a1=>reject<I>(a1, _is_match)
}
export function _maybe_reject<I extends unknown[]>(
	_is_match:_is_match_type<I>
):(a1:maybe<I[]>)=>maybe<I[], undefined> {
	return a1=>maybe_reject<I>(a1, _is_match)
}
export {
	_reject as _fn__reject,
}
