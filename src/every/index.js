/**
 * Returns true if every `predicate(value)` is truthy
 */
export function every(a, predicate) {
	let idx = -1
	const length = a.length
	while (++idx < length) {
		if (!predicate(a[idx], idx, a)) {
			return false
		}
	}
	return true
}
export function maybe_every(maybe_a, predicate, or = null) {
	if (!maybe_a) return or
	return every(maybe_a, predicate)
}
export { every as every_a1, every as every__a1, }