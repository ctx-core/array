import { _andand_, andand_name_fn_type } from '@ctx-core/function'
import { map } from './map'
/**
 * Returns Array of mapped `a1` with `_andand_(...attr_a1)`
 */
export function map_andand_</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = unknown
>(a1:I[], ...attr_a1:andand_name_fn_type<I, O>[]) {/*@formatter:on*/
	return map<I, O>(a1, _andand_<I, O>(...attr_a1))
}
export {
	map_andand_ as map__andand_,
	map_andand_ as map__andand__fn,
}
