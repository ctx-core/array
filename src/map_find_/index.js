import { map_find } from '../map_find/index.js'
/** @typedef {import('@ctx-core/function').wrap_a_T2}wrap_a_T2 */
/**
 * Returns function that returns value from [map_find](#map_find) with `fn` argument.
 * @param fn{(val:unknown, idx:number)=>unknown}
 * @returns {(a:wrap_a_T2)=>unknown}
 */
export function map_find_(fn) {
	return (a)=>map_find(a, fn)
}
export {
	map_find_ as _map_find,
	map_find_ as _find__map,
}
