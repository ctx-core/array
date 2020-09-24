import type { maybe, maybe_undefined } from '@ctx-core/function';
import type { sort_idx_ctx_type } from './sort_idx_ctx_type';
/**
 * Returns an Array of sorted indices from [sort_idx_ctx_type](#sort_idx_ctx_type).sort_idx_a1
 */
export declare function _sort_idx_a1<I extends unknown = unknown>(in_sort_idx_ctx: sort_idx_ctx_type<I>): number[];
export declare function _maybe_sort_idx_a1<I extends unknown = unknown>(in_sort_idx_ctx: maybe<sort_idx_ctx_type<I>>): maybe_undefined<number[]>;
