import { wrap_aa_, a_nowrap_T, wrap_aa_T } from '@ctx-core/function'
import { intersection_set_ } from '@ctx-core/set'
/**
 * Returns the _intersection of n arrays
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function intersection_<I extends unknown = unknown>(
	a2_nowrap:a_nowrap_T<I>
):intersection_T<I> {
	const a2 = wrap_aa_<I>(a2_nowrap)
	return Array.from(
		intersection_set_<wrap_aa_T<I>>(a2)
	) as intersection_T<I>
}
export type intersection_T<I extends unknown = unknown> =
	wrap_aa_T<I> extends (infer O)[][] ? O[] : never
export {
	intersection_ as _intersection,
	intersection_ as _intersection__a1,
}
