/**
 * Map return value of `fn(a[], i)` into an Array.
 */ export function map(a, fn) {
	const out_a = []
	for (let i = 0; i < a.length; i++) {
		out_a.push(fn(a[i], i))
	}
	return out_a
}
export function maybe_map(maybe_a, fn) {
	if (!maybe_a) return
	return map(maybe_a, fn)
}
