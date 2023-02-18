import type { compare_T, sort_idx_o_T } from '../_types'
/**
 * Returns a [sort_idx_o_T](#sort_idx_o_T).
 */
export declare function sort_idx_ctx_<
	I extends unknown = unknown
>(
	maybe_a:readonly I[]|undefined,
	compare?:compare_T<I>
):sort_idx_o_T<I>
export {
	sort_idx_ctx_ as _sort_idx_ctx,
	sort_idx_ctx_ as _ctx__idx__sort,
	sort_idx_ctx_ as _fn__sort_idx_ctx,
}
