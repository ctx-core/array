import type { maybe, maybe_undefined } from '@ctx-core/function';
import type { _is_match_type } from './_is_match_type';
/**
 * Returns Array of items not rejected by `fn`.
 */
export declare function reject</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(a1: I[], _is_match: _is_match_type<I>): O;
export declare function maybe_reject</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(maybe_a1: maybe<I[]>, _is_match: _is_match_type<I>): maybe_undefined<O>;
