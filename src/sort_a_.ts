import type { compare_T } from './compare_T.js'
import { maybe_slice, slice } from './slice.js'
import { maybe_sort, sort } from './sort.js'
/**
 * Sorts a copy of `a` by the `compare` function.
 */
export function sort_a_<I extends unknown = unknown>(
	a:I[],
	compare?:compare_T<I>
):I[] {
	return sort<I>(
		slice<I>(a, 0), compare
	) as I[]
}
export function maybe_sort_a_<I extends unknown = unknown>(
	maybe_a:I[]|undefined,
	compare?:compare_T<I>
):I[]|undefined {
	return maybe_sort<I>(
		maybe_slice<I>(maybe_a, 0), compare
	) as I[]|undefined
}
export {
	sort_a_ as sort_a1_,
	sort_a_ as _sort_a1,
	sort_a_ as _a1__sort,
	maybe_sort_a_ as maybe_sort_a1_,
	maybe_sort_a_ as _maybe_sort_a1,
}
