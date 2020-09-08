/**
 * Returns Array of values `>= 0` in `val_a1`.
 */
export function _gte_0_a1(val_a1) {
	const gte_0_a1 = []
	for (let i = 0; i < val_a1.length; i++) {
		const val = val_a1[i]
		if (val >= 0) {
			gte_0_a1.push(val)
		}
	}
	return gte_0_a1
}
export const _a1__gte__0 = _gte_0_a1
