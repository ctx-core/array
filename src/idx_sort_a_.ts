/**
 * Sort `val_a` by an array of indices in `in_sort_idx_a`.
 */
export function idx_sort_a_<I extends unknown = unknown>(
	val_a:I[],
	in_sort_idx_a:number[]|undefined
):I[] {
	const sort_idx_a = in_sort_idx_a as number[]
	const idx_sort_a = [] as I[]
	for (let i = 0; i < sort_idx_a.length; i++) {
		const idx = sort_idx_a[i]
		idx_sort_a.push(val_a[idx])
	}
	return idx_sort_a
}
export function maybe_idx_sort_a_<I extends unknown = unknown>(
	in_val_a:I[]|undefined,
	in_sort_idx_a:number[]|undefined
):I[]|undefined {
	if (!in_sort_idx_a || !in_val_a) return
	return idx_sort_a_<I>(in_val_a as I[], in_sort_idx_a)
}
export {
	idx_sort_a_ as idx_sort_a1_fn,
	idx_sort_a_ as _idx_sort_a1,
	idx_sort_a_ as _a1__sort__idx,
	maybe_idx_sort_a_ as maybe_idx_sort_a1_fn,
	maybe_idx_sort_a_ as _maybe_idx_sort_a1,
}
