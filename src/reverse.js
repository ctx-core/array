/**
 * Reverses the order of items in `in_a` by mutating `in_a`.
 */
export function reverse(in_a) {
	return in_a.reverse()
}
export function maybe_reverse(maybe_a, or = null) {
	return maybe_a ? reverse(maybe_a) : or
}
