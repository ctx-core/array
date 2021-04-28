import { map_find } from './map_find'
/**
 * Returns function that returns value from [map_find](#map_find) with `fn` argument.
 */
export function _map_find<I extends unknown = unknown, O extends unknown = I>(fn):_map_find_ret_T<I, O> {
	return (array:I[])=>map_find<I, O>(array, fn)
}
export {
	_map_find as _find__map
}
export type _map_find_ret_T<I extends unknown = unknown, O extends unknown = I> =
	(array:I[])=>O|undefined
