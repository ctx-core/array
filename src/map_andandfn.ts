import { andandfn_, andand_key_T } from '@ctx-core/function'
import { map } from './map'
/**
 * Returns Array of mapped `a` with `andandfn_(...attr_a)`
 */
export function map_andandfn</*@formatter:off*/
	In extends unknown = unknown,
	Out extends unknown = unknown
>(a:In[], ...attr_a:andand_key_T<In>[]):Out[] {/*@formatter:on*/
	return map<In, Out>(a, andandfn_<In, Out>(...attr_a))
}
export {
	map_andandfn as map__andand_,
	map_andandfn as map__andand__fn,
}
