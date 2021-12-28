import { andand_key_T } from '@ctx-core/function'
/**
 * Returns Array of mapped `a` with `andandfn_(...attr_a)`
 */
export declare function map_andandfn</*@formatter:off*/ In extends unknown = unknown, Out extends unknown = unknown>(a: In[], ...attr_a: andand_key_T<In>[]): Out[];
export { map_andandfn as map__andand_, map_andandfn as map__andand__fn, };
