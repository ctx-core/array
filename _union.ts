import { _union__set } from '@ctx-core/set'
import type { a_nowrap_type, wrap_a2_item_type, wrap_a2_type } from '@ctx-core/function'
import { _wrap_a2 } from '@ctx-core/function'
/**
 * Returns the _union of n arrays
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function _union<I extends unknown = unknown>(a2_nowrap:a_nowrap_type<I>) {
	const a2 = _wrap_a2<I>(a2_nowrap)
	return Array.from(
		_union__set<wrap_a2_type<I>>(a2)
	) as wrap_a2_item_type<I>[]
}
export const _union__a1 = _union
export const _uniq = _union
export const _uniq__a1 = _uniq
