import { _andand, andand, andand_name_type, maybe } from '@ctx-core/function'
import { map, maybe_map } from './map'
/**
 * Returns Array of mapped `a1` with `_andand(...name_a1)`.
 */
export function map_andand<I extends unknown, O extends unknown>(
	a1:I[],
	...name_a1:andand_name_type<I, O>[]
) {
	return map<I, (I|O)>(a1,
		item=>andand<I, O>(
			item, ...name_a1
		))
}
export function maybe_map_andand<I extends unknown, O extends unknown>(
	a1:maybe<I[]>,
	...name_a1:andand_name_type<I, O>[]
) {
	return maybe_map<I, O>(a1 as I[], _andand<I, O>(...name_a1))
}
export {
	map_andand as map__andand,
}
