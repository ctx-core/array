/**
 * Returns a sparsely populated Array with `idx_a` indices & `val_a` values
 */
export function sparse_a_<I extends unknown = unknown>(
	idx_a:number[], val_a:I[]
):I[] {
	const sparse_a = [] as I[]
	for (let i = 0; i < idx_a.length; i++) {
		const idx = idx_a[i]
		sparse_a[idx] = val_a[i]
	}
	return sparse_a
}
export {
	sparse_a_ as sparse_a1_fn,
	sparse_a_ as _sparse_a1,
	sparse_a_ as _a1__sparse,
}
