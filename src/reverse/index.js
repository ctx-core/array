/**
 * Reverses the order of items in `in_a` by mutating `in_a`.
 * @param in_a{unknown[]}
 * @returns {unknown[]}
 */
export function reverse(in_a) {
	return in_a.reverse()
}
/**
 * @param maybe_a{unknown[]|undefined}
 * @param or{unknown[]|null|undefined}
 * @returns {unknown[]|null|undefined}
 */
export function maybe_reverse(maybe_a, or = null) {
	return maybe_a ? reverse(maybe_a) : or
}
