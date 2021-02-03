import { _andand_or, andand_or_fn_type } from '@ctx-core/function'
import { map } from './map'
/**
 * Returns Array of mapped `a1` with `_andand(...attr_a1)` or the return value of `or_fn`.
 */
export function map_andand_or</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = unknown
>(/*@formatter:on*/
	a1: I[], attr_a1: string[], or_fn: andand_or_fn_type<I, O>
) {
	return map<I, O>(a1, _andand_or<I, O>(attr_a1, or_fn))
}
export {
	map_andand_or as map__andand__or,
}
