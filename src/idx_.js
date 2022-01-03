/**
 * Returns idx of first match in `a` with `compare`.
 */ export function idx_(in_a, compare) {
	if (in_a) {
		const a = in_a
		for (let idx = 0; idx < a.length; idx++) {
			const value = a[idx]
			if (value === compare || typeof compare === 'function' && compare(value, idx)) return idx
		}
	}
	return -1
}
export { idx_ as _idx, }
