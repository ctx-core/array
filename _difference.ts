import type { a2_nowrap_type } from './a2_nowrap_type'
import { _difference__set } from '@ctx-core/set'
import { _wrap_a2 } from './_wrap_a2'
/**
 * Returns the _difference of n arrays
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function _difference(a2_nowrap:a2_nowrap_type):any[] {
	const a2 = _wrap_a2(a2_nowrap)
	return Array.from(_difference__set(a2))
}
export const _difference__a1 = _difference
