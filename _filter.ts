import type { _is_match_type } from './_is_match_type'
import { filter } from './filter'
import type { maybe } from '@ctx-core/function'
/**
 * Returns function that returns value from [filter](#filter) with `fn` argument.
 */
export function _filter<I>(_is_match:_is_match_type<I>) {
	return (a1: I[])=>filter<I>(a1, _is_match)
}
export const _fn__filter = _filter
export function _maybe_filter<I>(_is_match:_is_match_type<I>) {
	return (maybe_a1: maybe<I[]>)=>filter<I>(maybe_a1 as I[], _is_match)
}
