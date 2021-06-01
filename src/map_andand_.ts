import type { andand_key_fn_T } from '@ctx-core/function'
import { map_andand } from './map_andand'
/**
 * Returns function that returns value from [map_andand](#map_andand) with `...attr_a`.
 */
export function map_andand_<In extends unknown, Out extends unknown>(
	...attr_a:andand_key_fn_T<In>[]
):(a:In[])=>Out[] {
	return (a:In[])=>map_andand<In, Out>(a, ...attr_a)
}
export {
	map_andand_ as _map_andand,
	map_andand_ as _map__andand,
	map_andand_ as _fn__map__andand,
}
