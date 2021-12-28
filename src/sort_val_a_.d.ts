import type { sort_idx_ctx_T } from './_types'
/**
 * Returns an Array of sorted values from [sort_idx_ctx_T](#sort_idx_ctx_T).sort_val_a
 */
export declare function sort_val_a_<I extends unknown = unknown>(in_sort_idx_ctx:sort_idx_ctx_T<I>):I[];
export declare function maybe_sort_val_a_<I extends unknown = unknown>(maybe_sort_idx_ctx:sort_idx_ctx_T<I>|undefined):I[]|undefined;
export {
	maybe_sort_val_a_ as maybe_sort_val_a1_fn,
	maybe_sort_val_a_ as _maybe_sort_val_a1,
	sort_val_a_ as sort_val_a1_fn,
	sort_val_a_ as _sort_val_a1,
}
