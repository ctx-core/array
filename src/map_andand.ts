import { _andand, andand, andand_key_T, maybe } from '@ctx-core/function'
import { map, map_fn_T, maybe_map } from './map'
/**
 * Returns Array of mapped `a1` with `_andand(...name_a1)`.
 */
export function map_andand<In extends unknown = unknown, Out extends unknown = unknown>(
	a1:In[],
	...name_a1:andand_key_T<In>[]
) {
	return map<In, Out>(a1,
		item=>andand<In, Out>(
			item, ...name_a1
		) as Out)
}
export function maybe_map_andand<Val extends unknown, Out extends unknown>(
	a1:maybe<Val[]>,
	...name_a1:andand_key_T<Val>[]
) {
	return maybe_map<Val, Out>(a1 as Val[], _andand<Val, Out>(...name_a1) as map_fn_T<Val, Out>)
}
export {
	map_andand as map__andand,
}
