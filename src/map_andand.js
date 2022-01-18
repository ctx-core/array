import { andand_, andand } from '@ctx-core/function'
/**
 * Returns Array of mapped `a` with `andand_(...name_a)`.
 */
export function map_andand(a, ...name_a) {
	return a.map(item=>andand(item, ...name_a))
}
export function maybe_map_andand(a, ...name_a) {
	return a?.map(andand_(...name_a))
}
export { map_andand as map__andand, }
