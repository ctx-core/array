import { _one_andand_or, andand_key_T, andand_or_fn_T } from '@ctx-core/function'
import { map, map_fn_T } from './map'
/**
 * Returns Array of mapped `a1` with `_andand(...attr_a1)` or the return value of `or_fn`.
 */
export function map_andand_or</*@formatter:off*/
	In extends unknown = unknown,
	Out extends unknown = unknown
>(/*@formatter:on*/
	a1:In[], attr_a1:andand_key_T<In>[], or_fn:andand_or_fn_T<In, Out>
) {
	return map<In, Out>(a1, _one_andand_or<In, Out>(attr_a1, or_fn) as map_fn_T<In, Out>)
}
export {
	map_andand_or as map__andand__or,
}
