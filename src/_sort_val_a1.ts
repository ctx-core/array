import type { sort_idx_ctx_T } from './sort_idx_ctx_T'
import type { maybe } from '@ctx-core/function'
/**
 * Returns an Array of sorted values from [sort_idx_ctx_T](#sort_idx_ctx_T).sort_val_a1
 */
export function _sort_val_a1<I extends unknown = unknown>(
	in_sort_idx_ctx:sort_idx_ctx_T<I>
):I[] {
	return in_sort_idx_ctx.sort_val_a1
}
export function _maybe_sort_val_a1<I extends unknown = unknown>(
	maybe_sort_idx_ctx:maybe<sort_idx_ctx_T<I>>
):maybe<I[], undefined> {
	return (
		maybe_sort_idx_ctx
		? _sort_val_a1<I>(maybe_sort_idx_ctx as sort_idx_ctx_T<I>)
		: undefined
	)
}
