import { _andand_ } from '@ctx-core/function'
import { map } from './map'
/**
 * Returns Array of mapped `a1` with `_andand_(...a1__attr)`
 */
export function map_andand_(a1, ...a1__attr) {
	return map(a1, _andand_(...a1__attr))
}
export const map__andand_ = map_andand_
export const map__andand__fn = map__andand_
