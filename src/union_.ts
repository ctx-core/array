import { wrap_a2_, a_nowrap_T, wrap_a2_item_T, wrap_a2_T } from '@ctx-core/function'
import { set_union_fn } from '@ctx-core/set'
/**
 * Returns the _union of n arrays
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function union_<I extends unknown = unknown>(
	a2_nowrap:a_nowrap_T<I>
):wrap_a2_item_T<I>[] {
	const a2 = wrap_a2_<I>(a2_nowrap)
	return Array.from(
		set_union_fn<wrap_a2_T<I>>(a2)
	) as wrap_a2_item_T<I>[]
}
export {
	union_ as _union,
	union_ as _union__a1,
	union_ as _uniq,
	union_ as _uniq__a1,
}
