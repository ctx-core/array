import { _andand_or } from '@ctx-core/function'
import { map } from './map'
/**
 * Returns Array of mapped `a1` with `_andand(...attr_a1)` or the return value of `or_fn`.
 */
export function map_andand_or(a1, attr_a1, or_fn) {
	return map(a1, _andand_or(attr_a1, or_fn))
}
export {
	map_andand_or as map__andand__or,
}
