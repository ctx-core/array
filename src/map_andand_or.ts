import { one_andand_or_, andand_key_T, andand_or_T } from '@ctx-core/function'
import { map, map_fn_T } from './map'
/**
 * Returns Array of mapped `a` with `_andand(...attr_a)` or the return value of `or_fn`.
 */
export function map_andand_or</*@formatter:off*/
	In extends unknown = unknown,
	Out extends unknown = unknown
>(/*@formatter:on*/
	a:In[], attr_a:andand_key_T<In>[], or_fn:andand_or_T<In, Out>
):Out[] {
	return map<In, Out>(a, one_andand_or_<In, Out>(attr_a, or_fn) as map_fn_T<In, Out>)
}
export {
	map_andand_or as map__andand__or,
}
