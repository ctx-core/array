/**
 * Returns first return value of `fn(a[idx], idx)` where `fn(a[idx], idx)` is truthy.
 */
export function map_find(a, fn) {
	for (let idx = 0; idx < a.length; idx++) {
		const val = a[idx]
		const map_value = fn(val, idx)
		if (map_value) return map_value
	}
	return
}
export function maybe_map_find(maybe_a, fn) {
	if (!maybe_a) return
	return map_find(maybe_a, fn)
}
export { map_find as find__map, }