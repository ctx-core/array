/** @typedef {import('../_types').compare_T}compare_T */
/**
 * Sort items in `a` by the `compare` function
 * @param a{unknown[]}
 * @param compare{compare_T}
 * @returns {unknown[]}
 */
export function sort(a, compare) {
	return a.sort(compare)
}
/**
 * @param maybe_a{unknown[]|undefined}
 * @param compare{compare_T}
 * @param or{unknown[]|null|unknown}
 * @returns {unknown[]|null|unknown}
 */
export function maybe_sort(maybe_a, compare, or = null) {
	return maybe_a ? sort(maybe_a, compare) : or
}
