import type { _is_match_type } from './_is_match_type'
import { idx_filter, maybe_idx_filter } from './idx_filter'
import { I__ } from '@ctx-core/combinators'
import type { maybe, maybe_undefined } from '@ctx-core/function'
/**
 * Returns function that returns value from [idx_filter](#idx_filter) with `fn` argument.
 */
export function _idx_filter(
	_is_match = I__ as _is_match_type<number>
):(a1:number[])=>number[] {
	return a1=>idx_filter(a1, _is_match)
}
export const _filter__idx = _idx_filter
export const _fn__filter__idx = _filter__idx
export function _maybe_idx_filter(
	_is_match = I__ as _is_match_type<number>
):(a1:maybe<number[]>)=>maybe_undefined<number[]> {
	return a1=>maybe_idx_filter(a1, _is_match)
}
