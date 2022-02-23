/**
 * Iterate over each item in `a` with `fn(a[i], i)`.
 */
export function each(a, fn) {
	for (let i = 0; i < a.length; i++) {
		fn(a[i], i)
	}
	return a
}
export function maybe_each(maybe_a, fn, or = null) {
	if (!maybe_a) return or
	return each(maybe_a, fn)
}
