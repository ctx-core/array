import { falsy } from '@ctx-core/function';
import { _is_match_type } from './_is_match_type';
/**
 * Returns function that returns value from [idx_filter](#idx_filter) with `fn` argument.
 */
export declare function _idx_filter(_is_match?: _is_match_type): (a1: falsy | any[]) => undefined | any[];
export declare const _filter__idx: typeof _idx_filter;
export declare const _fn__filter__idx: typeof _idx_filter;
