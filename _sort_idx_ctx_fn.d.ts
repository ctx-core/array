import type { compare_type } from './compare_type';
import type { sort_idx_ctx_a1_fn_type } from './sort_idx_ctx_a1_fn_type';
/**
 * Returns function that returns [_sort_idx_ctx](#_sort_idx_ctx).
 */
export declare function _sort_idx_ctx_fn<I extends unknown[]>(compare?: compare_type<I>): sort_idx_ctx_a1_fn_type<I>;
export declare const _fn__sort_idx_ctx: typeof _sort_idx_ctx_fn;
