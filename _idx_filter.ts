import { I__ } from '@ctx-core/combinators'
import { falsy } from '@ctx-core/function'
import { _is_match_type } from './_is_match_type'
import { idx_filter } from './idx_filter'
/**
 * Returns function that returns value from [idx_filter](#idx_filter) with `fn` argument.
 */
export function _idx_filter(_is_match:_is_match_type=I__):(a1:falsy|any[])=>undefined|any[] {
	return a1=>idx_filter(a1, _is_match)
}
export const _filter__idx = _idx_filter
export const _fn__filter__idx = _filter__idx
