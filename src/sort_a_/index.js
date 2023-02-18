import { maybe_slice, slice } from '../slice/index.js'
import { maybe_sort, sort } from '../sort/index.js'
/** @typedef {import('../_types').compare_T} */
/**
 * Sorts a copy of `a` by the `compare` function.
 * @param a{unknown[]}
 * @param [compare]{compare_T}
 * @returns {unknown[]}
 */
export function sort_a_(a, compare) {
	return sort(slice(a, 0), compare)
}
/**
 * @param maybe_a{unknown[]|undefined}
 * @param [compare]{compare_T}
 * @param [or]{unknown[]|null|undefined}
 * @returns {unknown[]|null|undefined}
 */
export function maybe_sort_a_(maybe_a, compare, or = null) {
	return maybe_sort(maybe_slice(maybe_a, 0), compare, or)
}
export {
	sort_a_ as sort_a1_,
	sort_a_ as _sort_a1,
	sort_a_ as _a1__sort,
	maybe_sort_a_ as maybe_sort_a1_,
	maybe_sort_a_ as _maybe_sort_a1,
}
