import type { maybe } from '@ctx-core/function'
import { find, maybe_find } from './find'
import type { _is_match_type } from './_is_match_type'
/**
 * Returns function that returns value from [find](#find) with `fn` argument.
 */
export function _find<I extends unknown = unknown>(fn:_is_match_type<I>) {
	return (a1:I[])=>find<I>(a1, fn)
}
export function _maybe_find<I extends unknown = unknown>(fn:_is_match_type<I>) {
	return (maybe_a1:maybe<I[]>)=>maybe_find<I>(maybe_a1, fn)
}
