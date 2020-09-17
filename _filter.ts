import type { _is_match_type } from './_is_match_type'
import { filter } from './filter'
import type { maybe } from '@ctx-core/function'
/**
 * Returns function that returns value from [filter](#filter) with `fn` argument.
 */
export function _filter<I = unknown>(_is_match:_is_match_type<I>) {
	return (a1_maybe: maybe<I[]>)=>filter<I>(a1_maybe, _is_match)
}
export const _fn__filter = _filter
