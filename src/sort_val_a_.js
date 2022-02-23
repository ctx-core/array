/**
 * Returns an Array of sorted values from [sort_idx_ctx_T](#sort_idx_ctx_T).sort_val_a
 */
export function sort_val_a_(in_sort_idx_ctx) {
	return in_sort_idx_ctx.sort_val_a
}
export function maybe_sort_val_a_(maybe_sort_idx_ctx, or = null) {
	return maybe_sort_idx_ctx ? sort_val_a_(maybe_sort_idx_ctx) : or
}
export {
	maybe_sort_val_a_ as maybe_sort_val_a1_fn,
	maybe_sort_val_a_ as _maybe_sort_val_a1,
	sort_val_a_ as sort_val_a1_fn,
	sort_val_a_ as _sort_val_a1,
}
