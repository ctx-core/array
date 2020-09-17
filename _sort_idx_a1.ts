import type { maybe } from '@ctx-core/function'
import type { sort_idx_ctx_type } from './sort_idx_ctx_type'
/**
 * Returns an Array of sorted indices from [sort_idx_ctx_type](#sort_idx_ctx_type).sort_idx_a1
 */
export function _sort_idx_a1<I = unknown>(in_sort_idx_ctx:maybe<sort_idx_ctx_type<I>>):maybe<number[], undefined> {
	return in_sort_idx_ctx ? (in_sort_idx_ctx as sort_idx_ctx_type).sort_idx_a1 : void 0
}
