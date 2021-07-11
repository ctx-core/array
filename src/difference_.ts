import { _difference__set } from '@ctx-core/set'
import type { a_nowrap_T, wrap_aa_item_T, wrap_aa_T } from '@ctx-core/function'
import { wrap_aa_ } from '@ctx-core/function'
/**
 * Returns the _difference of n arrays
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function difference_<I extends unknown = unknown>(
	a2_nowrap:a_nowrap_T<I>
):wrap_aa_item_T<I>[] {
	const a2 = wrap_aa_<I>(a2_nowrap)
	return Array.from(
		_difference__set<wrap_aa_T<I>>(a2)
	) as wrap_aa_item_T<I>[]
}
export {
	difference_ as _difference,
	difference_ as _difference__a1,
}
