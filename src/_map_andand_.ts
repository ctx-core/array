import type { andand_key_fn_T } from '@ctx-core/function'
import { map_andand_ } from './map_andand_'
/**
 * Returns function that returns value from [map_andand_](#map_andand_) with `...attr_a1`.
 */
export function _map_andand_<Val extends unknown, Out extends unknown>(
	...attr_a1:andand_key_fn_T<Val>[]
) {
	return (a1:Val[])=>map_andand_<Val, Out>(a1, ...attr_a1)
}
export {
	_map_andand_ as _map__andand_,
	_map_andand_ as _fn__map__andand__fn,
}
