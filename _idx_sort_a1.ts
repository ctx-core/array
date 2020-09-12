import type { falsy } from '@ctx-core/function'
/**
 * Sort `val_a1` by an array of indices in `sort_idx_a1`.
 */
export function _idx_sort_a1(val_a1:falsy|any[], sort_idx_a1:falsy|number[]):undefined|number[] {
	if (!sort_idx_a1 || !val_a1) return
	const idx_sort_a1 = []
	for (let i = 0; i < sort_idx_a1.length; i++) {
		const idx = sort_idx_a1[i]
		idx_sort_a1.push(val_a1[idx])
	}
	return idx_sort_a1
}
export const _a1__sort__idx = _idx_sort_a1
