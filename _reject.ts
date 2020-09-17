import type { maybe } from '@ctx-core/function'
import type { _is_match_type } from './_is_match_type'
import { reject } from './reject'
/**
 * Returns function that returns value from [reject](#reject) with `fn` argument.
 */
export function _reject<I = unknown>(_is_match:_is_match_type<I>):(a1:maybe<I[]>)=>maybe<I[], undefined> {
	return (a1:maybe<I[]>)=>reject<I>(a1, _is_match)
}
export const _fn__reject = _reject
