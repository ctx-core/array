import { one_andand_or_ } from '@ctx-core/function'
import { map } from '../map/index.js'
/**
 * Returns Array of mapped `a` with `_andand(...attr_a)` or the return value of `or_fn`.
 */
export function map_andand_or(a, attr_a, or_fn) {
	return map(a, one_andand_or_(attr_a, or_fn))
}
export { map_andand_or as map__andand__or, }
