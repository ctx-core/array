/**
 * Returns Array of values `>= 0` in `val_a`.
 */
export function gte_0_a_(val_a: number[]) {
	const gte_0_a = [] as number[]
	for (let i = 0; i < val_a.length; i++) {
		const val = val_a[i]
		if (val >= 0) {
			gte_0_a.push(val)
		}
	}
	return gte_0_a
}
export {
	gte_0_a_ as gte_0_a1_fn,
	gte_0_a_ as _gte_0_a1,
	gte_0_a_ as _a1__gte__0,
}
