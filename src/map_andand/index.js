import { andand_, andand } from '@ctx-core/function'
/** @typedef {import('@ctx-core/function').andand_key_T}andand_key_T */
/**
 * Returns Array of mapped `a` with `andand_(...name_a)`.
 * @param a{unknown[]}
 * @param name_a{andand_key_T}
 * @returns {unknown[]}
 */
export function map_andand(a, ...name_a) {
	return a.map(item=>andand(item, ...name_a))
}
/**
 * @param a{unknown[]|undefined}
 * @param name_a{andand_key_T}
 * @returns {unknown[]|undefined}
 */
export function maybe_map_andand(a, ...name_a) {
	return a?.map(andand_(...name_a))
}
export { map_andand as map__andand, }
