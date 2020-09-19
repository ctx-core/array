import type { maybe } from '@ctx-core/function';
import type { _is_match_type } from './_is_match_type';
/**
 * Returns function that returns value from [reject](#reject) with `fn` argument.
 */
export declare function _reject<I>(_is_match: _is_match_type<I>): (a1: I[]) => I[];
export declare const _fn__reject: typeof _reject;
export declare function _maybe_reject<I>(_is_match: _is_match_type<I>): (a1: maybe<I[]>) => maybe<I[], undefined>;
