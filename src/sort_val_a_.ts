import type { sort_idx_ctx_T } from './sort_idx_ctx_T.js'
/**
 * Returns an Array of sorted values from [sort_idx_ctx_T](#sort_idx_ctx_T).sort_val_a
 */
export function sort_val_a_<I extends unknown = unknown>(
	in_sort_idx_ctx:sort_idx_ctx_T<I>
):I[] {
	return in_sort_idx_ctx.sort_val_a
}
export function maybe_sort_val_a_<I extends unknown = unknown>(
	maybe_sort_idx_ctx:sort_idx_ctx_T<I>|undefined
):I[]|undefined {
	return (
		maybe_sort_idx_ctx
		? sort_val_a_<I>(maybe_sort_idx_ctx as sort_idx_ctx_T<I>)
		: undefined
	)
}
export {
	maybe_sort_val_a_ as maybe_sort_val_a1_fn,
	maybe_sort_val_a_ as _maybe_sort_val_a1,
	sort_val_a_ as sort_val_a1_fn,
	sort_val_a_ as _sort_val_a1,
}
