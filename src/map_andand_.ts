import { _andand_, andand_key_fn_T } from '@ctx-core/function'
import { map } from './map'
/**
 * Returns Array of mapped `a1` with `_andand_(...attr_a1)`
 */
export function map_andand_</*@formatter:off*/
	In extends unknown = unknown,
	Out extends unknown = unknown
>(a1:In[], ...attr_a1:andand_key_fn_T<In>[]) {/*@formatter:on*/
	return map<In, Out>(a1, _andand_<In, Out>(...attr_a1))
}
export {
	map_andand_ as map__andand_,
	map_andand_ as map__andand__fn,
}
