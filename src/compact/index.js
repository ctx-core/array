/**
 * Removes null values from the array
 * @param a{unknown[]}
 * @returns {unknown[]}
 */
export function compact(a) {
	const out_a = []
	for (const val of a) {
		if (val) {
			out_a.push(val)
		}
	}
	return out_a
}
/**
 * @param maybe_a{unknown[]}
 * @param [or]{unknown[]|null|undefined}
 * @returns {unknown[]|null|undefined}
 */
export function maybe_compact(maybe_a, or = null) {
	if (!maybe_a) return or
	return compact(maybe_a)
}
export {
	compact as compact_a1,
	compact as compact__a1,
}
