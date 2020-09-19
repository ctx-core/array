import type { sort_idx_ctx_type } from './sort_idx_ctx_type'
import { _idx_sort_a1 } from './_idx_sort_a1'
/**
 * Returns [sort_idx_ctx_type](#sort_idx_ctx_type) derived from `val_a1` sorted by `sort_idx_a1`.
 */
export function _idx_sort_a1_sort_idx_ctx<I extends unknown[]>(
	val_a1:I, sort_idx_a1:number[]
):sort_idx_ctx_type<I> {
	const sort_val_a1 = _idx_sort_a1<I>(val_a1, sort_idx_a1)
	return {
		sort_val_a1,
		sort_idx_a1,
	}
}
export const _ctx__idx__sort__a1__sort__idx = _idx_sort_a1_sort_idx_ctx
