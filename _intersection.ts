import { _wrap_a2, a_nowrap_type, wrap_a2_type } from '@ctx-core/function'
import { _intersection__set } from '@ctx-core/set'
/**
 * Returns the _intersection of n arrays
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export function _intersection<I extends unknown = unknown>(
	a2_nowrap: a_nowrap_type<I>
) {
	const a2 = _wrap_a2<I>(a2_nowrap)
	return Array.from(
		_intersection__set<wrap_a2_type<I>>(a2)
	) as wrap_a2_type<I> extends (infer O)[][] ? O : never
}
export {
	_intersection as _intersection__a1,
}
