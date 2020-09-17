import { find } from './find'
import type { _is_match_type } from './_is_match_type'
import type { maybe } from '@ctx-core/function'
/**
 * Returns function that returns value from [find](#find) with `fn` argument.
 */
export function _find<I = unknown>(fn:_is_match_type<I>) {
	return (a1_maybe:maybe<I[]>)=>find<I>(a1_maybe, fn) as I
}
