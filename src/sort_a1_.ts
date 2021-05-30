import type { compare_T } from './compare_T'
import { maybe_sort, sort } from './sort'
import { maybe_slice, slice } from './slice'
/**
 * Sorts a copy of `a` by the `compare` function.
 */
export function sort_a1_<I extends unknown = unknown>(
	a:I[],
	compare?:compare_T<I>
) {
	return sort<I>(
		slice<I>(a, 0), compare
	) as I[]
}
export function maybe_sort_a1_
<I extends unknown = unknown>(
	maybe_a:I[]|undefined,
	compare?:compare_T<I>
) {
	return maybe_sort<I>(
		maybe_slice<I>(maybe_a, 0), compare
	) as I[]|undefined
}
export {
	sort_a1_ as _sort_a1,
	sort_a1_ as _a1__sort,
	maybe_sort_a1_ as _maybe_sort_a1,
}
