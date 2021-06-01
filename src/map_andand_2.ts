import type { andand_key_fn_T } from '@ctx-core/function'
import { map_andandfn } from './map_andandfn'
/**
 * Returns function that returns value from [map_andand_](#map_andand_) with `...attr_a`.
 */
export function map_andand_2<Val extends unknown, Out extends unknown>(
	...attr_a:andand_key_fn_T<Val>[]
):(a:Val[])=>Out[] {
	return (a:Val[])=>map_andandfn<Val, Out>(a, ...attr_a)
}
export {
	map_andand_2 as _map_andand_,
	map_andand_2 as _map__andand_,
	map_andand_2 as _fn__map__andand__fn,
}
