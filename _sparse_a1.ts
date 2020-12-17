/**
 * Returns a sparsely populated Array with `idx_a1` indices & `val_a1` values
 */
export function _sparse_a1<I extends unknown = unknown>(idx_a1:number[], val_a1:I[]):I[] {
	const sparse_a1 = [] as I[]
	for (let i = 0; i < idx_a1.length; i++) {
		const idx = idx_a1[i]
		sparse_a1[idx] = val_a1[i]
	}
	return sparse_a1
}
export {
	_sparse_a1 as _a1__sparse,
}
