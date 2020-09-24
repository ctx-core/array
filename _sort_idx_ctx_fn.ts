import type { compare_type } from './compare_type'
import type { sort_idx_ctx_a1_fn_type } from './sort_idx_ctx_a1_fn_type'
import { _sort_idx_ctx } from './_sort_idx_ctx'
/**
 * Returns function that returns [_sort_idx_ctx](#_sort_idx_ctx).
 */
export function _sort_idx_ctx_fn<I extends unknown = unknown>(
	compare?:compare_type<I>
):sort_idx_ctx_a1_fn_type<I> {
	return (a1)=>_sort_idx_ctx<I>(a1, compare)
}
export const _fn__sort_idx_ctx = _sort_idx_ctx_fn
