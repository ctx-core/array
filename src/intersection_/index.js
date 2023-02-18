import { wrap_aa_ } from '@ctx-core/function'
import { intersection_set_ } from '@ctx-core/set'
/**
 * Returns the _intersection of n arrays
 * @param aa_nowrap{import('@ctx-core/function').a_nowrap_T<unknown>}
 * @returns {import('./index.d.ts').intersection_T<unknown>}
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function intersection_(aa_nowrap) {
	const a2 = wrap_aa_(aa_nowrap)
	return Array.from(intersection_set_(/** @type {unknown} */a2))
}
export {
	intersection_ as _intersection,
	intersection_ as _intersection__a1,
}
