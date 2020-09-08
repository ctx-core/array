import { _andand } from '@ctx-core/function'
import { map } from './map'
/**
 * Returns Array of mapped `a1` with `_andand(...attr_a1)`.
 */
export function map_andand(a1, ...attr_a1) {
	return map(a1, _andand(...attr_a1))
}
export const map__andand = map_andand
