import type { _is_match_type } from './_is_match_type';
import type { a1_item_type, maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Returns Array of `idx` indices filtered by `fn`.
 */
export declare function idx_filter<I extends number[]>(in_a1: I, _is_match?: _is_match_type<a1_item_type<I>>): I;
export declare const filter__idx: typeof idx_filter;
export declare function maybe_idx_filter<I extends number[]>(maybe_a1: maybe<I>, _is_match?: _is_match_type<a1_item_type<I>>): maybe_undefined<I>;
