import type { _is_match_type } from './_is_match_type';
import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Returns Array of `idx` indices filtered by `fn`.
 */
export declare function idx_filter<I = number>(in_a1: I[], _is_match?: _is_match_type<I>): number[];
export declare const filter__idx: typeof idx_filter;
export declare function maybe_idx_filter<I = number>(maybe_a1: maybe<I[]>, _is_match?: _is_match_type<I>): maybe_undefined<number[]>;
