/**
 * Map return value of `fn(a[], i)` into an Array.
 */
export function map(a, fn) {
	const out_a = []
	for (let i = 0; i < a.length; i++) {
		out_a.push(fn(a[i], i))
	}
	return out_a
}
export function maybe_map(maybe_a, fn, or = null) {
	if (!maybe_a) return or
	return maybe_a?.map(fn)
}
