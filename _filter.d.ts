import type { _is_match_type } from './_is_match_type';
import type { maybe } from '@ctx-core/function';
/**
 * Returns function that returns value from [filter](#filter) with `fn` argument.
 */
export declare function _filter<I extends unknown = unknown>(_is_match: _is_match_type<I>): (a1: I[]) => I[];
export declare const _fn__filter: typeof _filter;
export declare function _maybe_filter<I extends unknown = unknown>(_is_match: _is_match_type<I>): (maybe_a1: maybe<I[]>) => I[];
