import type { maybe } from '@ctx-core/function'
/**
 * Sort `val_a1` by an array of indices in `in_sort_idx_a1`.
 */
export function _idx_sort_a1<I extends unknown = unknown>(
	val_a1: I[],
	in_sort_idx_a1: maybe<number[]>
): I[] {
	const sort_idx_a1 = in_sort_idx_a1 as number[]
	const idx_sort_a1 = [] as I[]
	for (let i = 0; i < sort_idx_a1.length; i++) {
		const idx = sort_idx_a1[i]
		idx_sort_a1.push(val_a1[idx])
	}
	return idx_sort_a1
}
export function _maybe_idx_sort_a1<I extends unknown = unknown>(
	in_val_a1: maybe<I[]>,
	in_sort_idx_a1: maybe<number[]>
): maybe<I[], undefined> {
	if (!in_sort_idx_a1 || !in_val_a1) return
	return _idx_sort_a1<I>(in_val_a1 as I[], in_sort_idx_a1)
}
export {
	_idx_sort_a1 as _a1__sort__idx,
}
