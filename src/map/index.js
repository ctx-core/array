/** @typedef {import('./index.d.ts').map_fn_T}map_fn_T */
/**
 * Map return value of `fn(a[], i)` into an Array.
 * @param a{unknown[]}
 * @param fn{map_fn_T}
 * @returns {unknown[]}
 */
export function map(a, fn) {
	const out_a = []
	for (let i = 0; i < a.length; i++) {
		out_a.push(fn(a[i], i))
	}
	return out_a
}
/**
 * @param maybe_a{unknown[]|undefined}
 * @param fn{fnmap_fn_T}
 * @param or{unknown[]|null|undefined}
 * @returns {unknown[]|null|undefined}
 */
export function maybe_map(maybe_a, fn, or = null) {
	if (!maybe_a) return or
	return maybe_a?.map(fn)
}
