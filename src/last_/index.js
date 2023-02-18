/**
 * Returns the _last item in the in_a
 * @param a{unknown[]}
 * @returns {unknown|undefined}
 */
export function last_(a) {
	return a[a.length - 1]
}
/**
 * @param maybe_a{unknown[]|undefined}
 * @param or{unknown[]|null|undefined}
 * @returns {unknown[]|null|undefined}
 */
export function maybe_last_(maybe_a, or = null) {
	if (!maybe_a) return or
	return last_(maybe_a)
}
export {
	last_ as _last,
	last_ as _last__a1,
	maybe_last_ as _maybe_last,
}
