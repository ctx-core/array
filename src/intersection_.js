import { wrap_aa_ } from '@ctx-core/function'
import { intersection_set_ } from '@ctx-core/set'
/**
 * Returns the _intersection of n arrays
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */ export function intersection_(aa_nowrap) {
	const a2 = wrap_aa_(aa_nowrap)
	return Array.from(intersection_set_(a2))
}
export { intersection_ as _intersection, intersection_ as _intersection__a1, }
