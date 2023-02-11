import { map_find } from '../map_find/index.js'
/**
 * Returns function that returns value from [map_find](#map_find) with `fn` argument.
 */
export function map_find_(fn) {
	return (a)=>map_find(a, fn)
}
export {
	map_find_ as _map_find,
	map_find_ as _find__map,
}
