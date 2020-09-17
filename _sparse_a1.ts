/**
 * Returns a sparsely populated Array with `idx_a1` indices & `val_a1` values
 */
export function _sparse_a1(idx_a1:number[], val_a1:unknown[]):unknown[] {
	const sparse_a1 = []
	for (let i = 0; i < idx_a1.length; i++) {
		const idx = idx_a1[i]
		sparse_a1[idx] = val_a1[i]
	}
	return sparse_a1
}
export const _a1__sparse = _sparse_a1
