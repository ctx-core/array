import type { maybe } from '@ctx-core/function';
import type { _is_match_type } from './_is_match_type';
/**
 * Returns Array where items in `a1` are filtered by `fn`.
 */
export declare function filter<I extends unknown>(a1: I[], _is_match: _is_match_type<I>): I[];
export declare function maybe_filter<I extends unknown>(maybe_a1: maybe<I[]>, _is_match: _is_match_type<I>): maybe<I[], undefined>;
