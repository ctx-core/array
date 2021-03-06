/**
 * Returns an Array of incrementing index (`idx`) values with `start=0`.
 */
export function idx_a_(count:number, start = 0):number[] {
	const idx_a = [] as number[]
	for (let i = 0; i < count; i++) {
		idx_a.push(start + i)
	}
	return idx_a
}
export {
	idx_a_ as idx_a1_fn,
	idx_a_ as _idx_a1,
	idx_a_ as _a1__idx,
}
