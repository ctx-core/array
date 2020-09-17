import type { _is_match_type } from './_is_match_type';
import type { maybe } from '@ctx-core/function';
/**
 * Returns function that returns value from [idx_filter](#idx_filter) with `fn` argument.
 */
export declare function _idx_filter(_is_match?: _is_match_type<number>): (a1: maybe<number[]>) => undefined | number[];
export declare const _filter__idx: typeof _idx_filter;
export declare const _fn__filter__idx: typeof _idx_filter;
