import { _andand, andand, andand_key_T } from '@ctx-core/function'
import { map, map_fn_T, maybe_map } from './map'
/**
 * Returns Array of mapped `a` with `_andand(...name_a)`.
 */
export function map_andand<In extends unknown = unknown, Out extends unknown = unknown>(
	a:In[],
	...name_a:andand_key_T<In>[]
):Out[] {
	return map<In, Out>(a,
		item=>andand<In, Out>(
			item, ...name_a
		) as Out)
}
export function maybe_map_andand<Val extends unknown, Out extends unknown>(
	a:Val[]|undefined,
	...name_a:andand_key_T<Val>[]
):Out[]|undefined {
	return maybe_map<Val, Out>(
		a as Val[],
		_andand<Val, Out>(...name_a) as map_fn_T<Val, Out>
	)
}
export {
	map_andand as map__andand,
}
