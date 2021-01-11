import { andand_name_fn_type } from '@ctx-core/function';
/**
 * Returns Array of mapped `a1` with `_andand_(...attr_a1)`
 */
export declare function map_andand_</*@formatter:off*/ I extends unknown = unknown, O extends unknown = unknown>(a1: I[], ...attr_a1: andand_name_fn_type<I, O>[]): (I | O)[];
export { map_andand_ as map__andand_, map_andand_ as map__andand__fn, };
