/**
 * Sort items in `a` by the `compare` function
 */
export function sort(a, compare) {
	return a.sort(compare)
}
export function maybe_sort(maybe_a, compare, or = null) {
	return maybe_a ? sort(maybe_a, compare) : or
}
