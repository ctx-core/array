import type { a_nowrap_T, wrap_aa_item_T, wrap_aa_T } from '@ctx-core/function'
import { wrap_aa_ } from '@ctx-core/function'
import { difference_set_ } from '@ctx-core/set'
/**
 * Returns the _difference of n arrays
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function difference_<I extends unknown = unknown>(
	aa_nowrap:a_nowrap_T<I>
):wrap_aa_item_T<I>[] {
	const aa = wrap_aa_<I>(aa_nowrap)
	return Array.from(
		difference_set_<wrap_aa_T<I>>(aa)
	) as wrap_aa_item_T<I>[]
}
export {
	difference_ as _difference,
	difference_ as _difference__a1,
}
