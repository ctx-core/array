import { map_find } from './map_find'
/**
 * Returns function that returns value from [map_find](#map_find) with `fn` argument.
 */
export function _map_find(fn) {
	return array=>map_find(array, fn)
}
export const _find__map = _map_find