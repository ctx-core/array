import type { sort_idx_ctx_type } from './sort_idx_ctx_type';
import type { maybe } from '@ctx-core/function';
/**
 * Returns an Array of sorted values from [sort_idx_ctx_type](#sort_idx_ctx_type).sort_val_a1
 */
export declare function _sort_val_a1<I extends unknown>(in_sort_idx_ctx: sort_idx_ctx_type<I>): I[];
export declare function _maybe_sort_val_a1<I extends unknown>(maybe_sort_idx_ctx: maybe<sort_idx_ctx_type<I>>): maybe<I[], undefined>;
