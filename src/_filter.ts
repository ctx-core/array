import type { maybe } from '@ctx-core/function'
import type { _is_match_T } from './_is_match_T'
import { filter } from './filter'
/**
 * Returns function that returns value from [filter](#filter) with `fn` argument.
 */
export function _filter<I extends unknown = unknown>(
	_is_match: _is_match_T<I>
) {
	return (a1: I[]) => filter<I>(a1, _is_match)
}
export function _maybe_filter<I extends unknown = unknown>(
	_is_match: _is_match_T<I>
) {
	return (maybe_a1: maybe<I[]>) => filter<I>(maybe_a1 as I[], _is_match)
}
export {
	_filter as _fn__filter,
}
