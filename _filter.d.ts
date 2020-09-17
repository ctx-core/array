import type { _is_match_type } from './_is_match_type';
import type { maybe } from '@ctx-core/function';
/**
 * Returns function that returns value from [filter](#filter) with `fn` argument.
 */
export declare function _filter<I = unknown>(_is_match: _is_match_type<I>): (a1_maybe: maybe<I[]>) => I[];
export declare const _fn__filter: typeof _filter;
