import type { andand_key_fn_T } from '@ctx-core/function'
import { map_andand } from './map_andand'
/**
 * Returns function that returns value from [map_andand](#map_andand) with `...attr_a1`.
 */
export function _map_andand<In extends unknown, Out extends unknown>(
	...attr_a1:andand_key_fn_T<In>[]
) {
	return (a1:In[])=>map_andand<In, Out>(a1, ...attr_a1)
}
export { _map_andand as _map__andand, _map_andand as _fn__map__andand, }
