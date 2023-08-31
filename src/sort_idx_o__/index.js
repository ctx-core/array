import { sort_idx_o_ } from '../sort_idx_o_/index.js'
/**
 * Returns function that returns [_sort_idx_ctx](#_sort_idx_ctx).
 * @param compare{import('../_types').compare_T}
 * @returns {import('../_types').sort_idx_ctx__T}
 */
export function sort_idx_o__(compare) {
	return a=>sort_idx_o_(a, compare)
}
export {
	sort_idx_o__ as sort_idx_ctx__,
	sort_idx_o__ as sort_idx_ctx_2,
	sort_idx_o__ as _sort_idx_ctx_fn,
	sort_idx_o_ as _fn__sort_idx_ctx,
}
