import type { maybe, maybe_undefined } from '@ctx-core/function'
import type { sort_idx_ctx_type } from './sort_idx_ctx_type'
/**
 * Returns an Array of sorted indices from [sort_idx_ctx_type](#sort_idx_ctx_type).sort_idx_a1
 */
export function _sort_idx_a1<I extends unknown[]>(
	in_sort_idx_ctx:sort_idx_ctx_type<I>
):number[] {
	return in_sort_idx_ctx.sort_idx_a1
}
export function _maybe_sort_idx_a1<I extends unknown[]>(
	in_sort_idx_ctx:maybe<sort_idx_ctx_type<I>>
):maybe_undefined<number[]> {
	return (
		in_sort_idx_ctx
		? _sort_idx_a1<I>(in_sort_idx_ctx as sort_idx_ctx_type<I>)
		: undefined
	)
}
