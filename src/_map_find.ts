import type { falsy } from '@ctx-core/function'
import { map_find } from './map_find'
/**
 * Returns function that returns value from [map_find](#map_find) with `fn` argument.
 */
export function _map_find<Val extends unknown = unknown, Out extends unknown = Val>(
	fn:(val:Val, i:number)=>Out|falsy
):_map_find_ret_T<Val, Out> {
	return (a1:Val[])=>map_find<Val, Out>(a1, fn)
}
export {
	_map_find as _find__map
}
export type _map_find_ret_T<Val extends unknown = unknown, Out extends unknown = Val> =
	(a1:Val[])=>Out|undefined
