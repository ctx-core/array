import type { sort_idx_ctx_type } from './sort_idx_ctx_type'
import type { maybe } from '@ctx-core/function'
/**
 * Returns an Array of sorted values from [sort_idx_ctx_type](#sort_idx_ctx_type).sort_val_a1
 */
export function _sort_val_a1<I = unknown>(
	in_sort_idx_ctx:maybe<sort_idx_ctx_type<I>>
):maybe<I[], undefined> {
	return in_sort_idx_ctx ? (in_sort_idx_ctx as sort_idx_ctx_type<I>).sort_val_a1 : void 0
}
