/**
 * Returns Array of values `<= 0` in `val_a1`.
 */
export function _lte_0_a1(val_a1:number[]) {
	const lte_0_a1 = [] as number[]
	for (let i = 0; i < val_a1.length; i++) {
		const val = val_a1[i]
		if (val <= 0) {
			lte_0_a1.push(val)
		}
	}
	return lte_0_a1
}
export {
	_lte_0_a1 as _a1__lte__0,
}
