import type { sort_idx_ctx_T } from './sort_idx_ctx_T.js'
import { idx_sort_a_ } from './idx_sort_a_.js'
/**
 * Returns [sort_idx_ctx_T](#sort_idx_ctx_T) derived from `val_a` sorted by `sort_idx_a`.
 */
export function idx_sort_a_sort_idx_ctx_<I extends unknown = unknown>(
	val_a:I[], sort_idx_a:number[]
):sort_idx_ctx_T<I> {
	const sort_val_a = idx_sort_a_<I>(val_a, sort_idx_a)
	return {
		sort_val_a,
		sort_idx_a,
	}
}
export {
	idx_sort_a_sort_idx_ctx_ as idx_sort_a1_sort_idx_ctx_,
	idx_sort_a_sort_idx_ctx_ as _idx_sort_a1_sort_idx_ctx,
	idx_sort_a_sort_idx_ctx_ as _ctx__idx__sort__a1__sort__idx,
}
