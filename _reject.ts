import type { falsy } from '@ctx-core/function'
import type { _is_match_type } from './_is_match_type'
import { reject } from './reject'
/**
 * Returns function that returns value from [reject](#reject) with `fn` argument.
 */
export function _reject(_is_match:_is_match_type):(a1:falsy|any[])=>undefined|any[] {
	return a1=>reject(a1, _is_match)
}
export const _fn__reject = _reject
