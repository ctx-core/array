import type { andand_key_T } from '@ctx-core/function'
import { map_andandfn } from './map_andandfn.js'
/**
 * Returns function that returns value from [map_andand_](#map_andand_) with `...attr_a`.
 */
export function map_andandfn_<Val extends unknown, Out extends unknown>(
	...attr_a:andand_key_T<Val>[]
):(a:Val[])=>Out[] {
	return (a:Val[])=>map_andandfn<Val, Out>(a, ...attr_a)
}
export {
	map_andandfn_ as map_andand_2,
	map_andandfn_ as _map_andand_,
	map_andandfn_ as _map__andand_,
	map_andandfn_ as _fn__map__andand__fn,
}
