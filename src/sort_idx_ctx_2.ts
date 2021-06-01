import type { compare_T } from './compare_T'
import type { sort_idx_ctx_2_T } from './sort_idx_ctx_2_T'
import { sort_idx_ctx_ } from './sort_idx_ctx_'
/**
 * Returns function that returns [_sort_idx_ctx](#_sort_idx_ctx).
 */
export function sort_idx_ctx_2<I extends unknown = unknown>(
	compare?:compare_T<I>
):sort_idx_ctx_2_T<I> {
	return (a)=>sort_idx_ctx_<I>(a, compare)
}
export {
	sort_idx_ctx_2 as _sort_idx_ctx_fn,
	sort_idx_ctx_ as _fn__sort_idx_ctx,
}
