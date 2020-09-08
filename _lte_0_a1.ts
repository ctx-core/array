/**
 * Returns Array of values `<= 0` in `val_a1`.
 * @param {number[]} val_a1
 * @returns {number[]}
 */
export function _lte_0_a1(val_a1) {
	const lte_0_a1 = []
	for (let i = 0; i < val_a1.length; i++) {
		const val = val_a1[i]
		if (val <= 0) {
			lte_0_a1.push(val)
		}
	}
	return lte_0_a1
}
export const _a1__lte__0 = _lte_0_a1
