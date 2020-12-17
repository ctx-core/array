import type { maybe, maybe_undefined } from '@ctx-core/function';
import type { _is_match_type } from './_is_match_type';
/**
 * Returns function that returns value from [idx_filter](#idx_filter) with `fn` argument.
 */
export declare function _idx_filter(_is_match?: _is_match_type<number>): (a1: number[]) => number[];
export declare function _maybe_idx_filter(_is_match?: _is_match_type<number>): (a1: maybe<number[]>) => maybe_undefined<number[]>;
export { _idx_filter as _filter__idx, _idx_filter as _fn__filter__idx, };
