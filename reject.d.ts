import type { _is_match_type } from './_is_match_type';
import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Returns Array of items not rejected by `fn`.
 */
export declare function reject<I>(a1: I[], _is_match: _is_match_type<I>): I[];
export declare function maybe_reject<I>(maybe_a1: maybe<I[]>, _is_match: _is_match_type<I>): maybe_undefined<I[]>;
