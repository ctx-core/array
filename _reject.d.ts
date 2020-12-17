import type { maybe } from '@ctx-core/function';
import type { _is_match_type } from './_is_match_type';
/**
 * Returns function that returns value from [reject](#reject) with `fn` argument.
 */
export declare function _reject<I extends unknown = unknown>(_is_match: _is_match_type<I>): (a1: I[]) => I[];
export declare function _maybe_reject<I extends unknown[]>(_is_match: _is_match_type<I>): (a1: maybe<I[]>) => maybe<I[], undefined>;
export { _reject as _fn__reject, };
