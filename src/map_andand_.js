import { map_andand } from './map_andand.js'
/**
 * Returns function that returns value from [map_andand](#map_andand) with `...attr_a`.
 */
export function map_andand_(...attr_a) {
	return (a)=>map_andand(a, ...attr_a)
}
export { map_andand_ as _map_andand, map_andand_ as _map__andand, map_andand_ as _fn__map__andand, }
