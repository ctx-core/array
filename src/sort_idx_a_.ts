import type { sort_idx_ctx_T } from './sort_idx_ctx_T.js'
/**
 * Returns an Array of sorted indices from [sort_idx_ctx_T](#sort_idx_ctx_T).sort_idx_a
 */
export function sort_idx_a_<I extends unknown = unknown>(
	in_sort_idx_ctx:sort_idx_ctx_T<I>
):number[] {
	return in_sort_idx_ctx.sort_idx_a
}
export function maybe_sort_idx_a_<I extends unknown = unknown>(
	in_sort_idx_ctx:sort_idx_ctx_T<I>|undefined
):number[]|undefined {
	return (
		in_sort_idx_ctx
		? sort_idx_a_<I>(in_sort_idx_ctx as sort_idx_ctx_T<I>)
		: undefined
	)
}
export {
	sort_idx_a_ as sort_idx_a1_fn,
	sort_idx_a_ as _sort_idx_a1,
	maybe_sort_idx_a_ as maybe_sort_idx_a1_fn,
	maybe_sort_idx_a_ as _maybe_sort_idx_a1,
}
