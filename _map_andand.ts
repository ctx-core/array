import { map_andand } from './map_andand'
/**
 * Returns function that returns value from [map_andand](#map_andand) with `...attr_a1`.
 */
export function _map_andand(...attr_a1) {
	return a1=>map_andand(a1, ...attr_a1)
}
export const _map__andand = _map_andand
export const _fn__map__andand = _map__andand
