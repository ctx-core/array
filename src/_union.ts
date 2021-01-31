import { _wrap_a2, a_nowrap_type, wrap_a2_item_type, wrap_a2_type } from '@ctx-core/function'
import { _union__set } from '@ctx-core/set'
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
export {
	_union as _union__a1,
	_union as _uniq,
	_union as _uniq__a1,
}
