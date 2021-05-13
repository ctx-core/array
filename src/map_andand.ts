import { _andand, andand, andand_name_type, maybe } from '@ctx-core/function'
import { map, maybe_map } from './map'
/**
 * Returns Array of mapped `a1` with `_andand(...name_a1)`.
 */
export function map_andand<Val extends unknown = unknown, Out extends unknown = unknown>(
	a1:Val[],
	...name_a1:andand_name_type<Val, Out>[]
) {
	return map<Val, Out>(a1,
		item=>andand<Val, Out>(
			item, ...name_a1
		) as Out)
}
export function maybe_map_andand<Val extends unknown, Out extends unknown>(
	a1:maybe<Val[]>,
	...name_a1:andand_name_type<Val, Out>[]
) {
	return maybe_map<Val, Out>(a1 as Val[], _andand<Val, Out>(...name_a1))
}
export {
	map_andand as map__andand,
}
