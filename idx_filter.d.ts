import type { _is_match_type } from './_is_match_type';
import type { maybe } from '@ctx-core/function';
/**
 * Returns Array of `idx` indices filtered by `fn`.
 */
export declare function idx_filter<I = number>(in_a1: maybe<I[]>, _is_match?: _is_match_type<I>): maybe<number[], undefined>;
export declare const filter__idx: typeof idx_filter;
