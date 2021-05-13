import { map_andand } from './map_andand'
/**
 * Returns function that returns value from [map_andand](#map_andand) with `...attr_a1`.
 */
export function _map_andand</*@formatter:off*/
	Val extends unknown = unknown,
	Out extends unknown = unknown
>/*@formatter:on*/(...attr_a1:string[]) {
	return (a1:Val[])=>map_andand<Val, Out>(a1, ...attr_a1)
}
export {
	_map_andand as _map__andand,
	_map_andand as _fn__map__andand,
}
