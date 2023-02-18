import { wrap_aa_ } from '@ctx-core/function'
import { difference_set_ } from '@ctx-core/set'
/**
 * Returns the _difference of n arrays
 * @param aa_nowrap{import('@ctx-core/function').a_nowrap_T}
 * @returns {import('@ctx-core/function').wrap_aa_T[]}
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function difference_(aa_nowrap) {
	const aa = wrap_aa_(aa_nowrap)
	return Array.from(difference_set_(/** @type {unknown} */aa))
}
export {
	difference_ as _difference,
	difference_ as _difference__a1,
}
