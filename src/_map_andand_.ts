import type { andand_name_fn_type } from '@ctx-core/function'
import { map_andand_ } from './map_andand_'
/**
 * Returns function that returns value from [map_andand_](#map_andand_) with `...attr_a1`.
 */
export function _map_andand_<I extends unknown, O extends unknown>(
	...attr_a1: andand_name_fn_type<I, O>[]
) {
	return a1 => map_andand_<I, O>(a1, ...attr_a1)
}
export {
	_map_andand_ as _map__andand_,
	_map_andand_ as _fn__map__andand__fn,
}
