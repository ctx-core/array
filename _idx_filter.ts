import type { maybe, maybe_undefined } from '@ctx-core/function'
import { I__ } from '@ctx-core/combinators'
import type { _is_match_type } from './_is_match_type'
import { idx_filter, maybe_idx_filter } from './idx_filter'
/**
 * Returns function that returns value from [idx_filter](#idx_filter) with `fn` argument.
 */
export function _idx_filter(
	_is_match = I__ as _is_match_type<number>
):(a1:number[])=>number[] {
	return a1=>idx_filter(a1, _is_match)
}
export function _maybe_idx_filter(
	_is_match = I__ as _is_match_type<number>
):(a1:maybe<number[]>)=>maybe_undefined<number[]> {
	return a1=>maybe_idx_filter(a1, _is_match)
}
export {
	_idx_filter as _filter__idx,
	_idx_filter as _fn__filter__idx,
}
