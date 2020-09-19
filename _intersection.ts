import { _intersection__set } from '@ctx-core/set'
import { _wrap_a2 } from './_wrap_a2'
import type { a2_nowrap_type } from '@ctx-core/function'
/**
 * Returns the _intersection of n arrays
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function _intersection<I>(a2_nowrap:a2_nowrap_type<I>):I[] {
	const a2 = _wrap_a2<I>(a2_nowrap)
	return Array.from(_intersection__set<I>(a2))
}
export const _intersection__a1 = _intersection
