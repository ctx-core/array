import type { wrap_a_T2 } from '@ctx-core/function'
/**
 * Returns function that returns value from [map_find](#map_find) with `fn` argument.
 */
export declare function map_find_<In extends unknown = unknown, Out extends unknown = In>(fn:(val:In, idx:number)=>Out):(a:wrap_a_T2<In>)=>Out|undefined;
export { map_find_ as _map_find, map_find_ as _find__map, }
