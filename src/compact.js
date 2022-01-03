/**
 * Removes null values from the array
 */ export function compact(a) {
	const out_a = []
	for (const val of a) {
		if (val) {
			out_a.push(val)
		}
	}
	return out_a
}
export function maybe_compact(maybe_a) {
	if (!maybe_a) return
	return compact(maybe_a)
}
export { compact as compact_a1, compact as compact__a1, }
