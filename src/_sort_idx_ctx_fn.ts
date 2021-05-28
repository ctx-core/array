import type { compare_T } from './compare_T'
import type { sort_idx_ctx_a1_fn_T } from './sort_idx_ctx_a1_fn_T'
import { _sort_idx_ctx } from './_sort_idx_ctx'
/**
 * Returns function that returns [_sort_idx_ctx](#_sort_idx_ctx).
 */
export function _sort_idx_ctx_fn<I extends unknown = unknown>(
	compare?:compare_T<I>
):sort_idx_ctx_a1_fn_T<I> {
	return (a1)=>_sort_idx_ctx<I>(a1, compare)
}
export {
	_sort_idx_ctx as _fn__sort_idx_ctx,
}
