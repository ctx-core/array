import { _difference__set } from '@ctx-core/set'
import { _wrap_a2 } from './_wrap_a2'
import type { a2_nowrap_type } from '@ctx-core/function'
/**
 * Returns the _difference of n arrays
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function _difference<I = unknown>(a2_nowrap:a2_nowrap_type<I>):I[] {
	const a2 = _wrap_a2<I>(a2_nowrap)
	return Array.from(_difference__set<I>(a2))
}
export const _difference__a1 = _difference
