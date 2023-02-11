import type { andand_key_T } from '@ctx-core/function'
/**
 * Returns function that returns value from [map_andand](#map_andand) with `...attr_a`.
 */
export declare function map_andand_<
	In extends unknown, Out extends unknown
>(
	...attr_a:readonly andand_key_T<In>[]
):(a:readonly In[])=>Out[]
export {
	map_andand_ as _map_andand,
	map_andand_ as _map__andand,
	map_andand_ as _fn__map__andand,
}
