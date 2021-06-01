import type { wrap_a_T2 } from '@ctx-core/function'
import { map_find } from './map_find'
/**
 * Returns function that returns value from [map_find](#map_find) with `fn` argument.
 */
export function map_find_<In extends unknown = unknown, Out extends unknown = In>(
	fn:(val:In, idx:number)=>Out
):(a:wrap_a_T2<In>)=>Out|undefined {
	return (a:wrap_a_T2<In>)=>map_find<In, Out>(a, fn)
}
export {
	map_find_ as _map_find,
	map_find_ as _find__map,
}
