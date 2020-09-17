/**
 * Returns an Array of incrementing index (`idx`) values with `start=0`.
 */
export function _idx_a1(count:number, start = 0):unknown[] {
	const idx_a1 = []
	for (let i = 0; i < count; i++) {
		idx_a1.push(start + i)
	}
	return idx_a1
}
export const _a1__idx = _idx_a1
