import type { a2_nowrap_type } from './a2_nowrap_type'
import { _union__set } from '@ctx-core/set'
import { _wrap_a2 } from './_wrap_a2'
/**
 * Returns the _union of n arrays
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function _union(a2_nowrap:a2_nowrap_type):any[] {
	const a2 = _wrap_a2(a2_nowrap)
	return Array.from(_union__set(a2))
}
export const _union__a1 = _union
export const _uniq = _union
export const _uniq__a1 = _uniq
