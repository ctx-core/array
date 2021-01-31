import { map_find } from './map_find'
/**
 * Returns function that returns value from [map_find](#map_find) with `fn` argument.
 */
export function _map_find<I extends unknown = unknown, O extends unknown = I>(fn) {
	return (array) => map_find<I, O>(array, fn)
}
export {
	_map_find as _find__map
}
