/** @typedef {import('@ctx-core/function').wrap_a_T2}wrap_a_T2 */
/**
 * Returns first return value of `fn(a[idx], idx)` where `fn(a[idx], idx)` is truthy.
 * @param a{wrap_a_T2}
 * @param fn{(val:unknown, idx:number)=>unknown}
 * @returns {unknown}
 */
export function map_find(a, fn) {
	for (let idx = 0; idx < a.length; idx++) {
		const val = a[idx]
		const map_value = fn(val, idx)
		if (map_value) return map_value
	}
	return
}
/**
 * @param maybe_a{wrap_a_T2}
 * @param fn{(val:unknown, idx:number)=>unknown}
 * @param or{unknown}
 * @returns {unknown}
 */
export function maybe_map_find(maybe_a, fn, or = null) {
	if (!maybe_a) return or
	return map_find(maybe_a, fn)
}
export { map_find as find__map, }
