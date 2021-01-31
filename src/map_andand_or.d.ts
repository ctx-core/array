import { andand_or_fn_type } from '@ctx-core/function';
/**
 * Returns Array of mapped `a1` with `_andand(...attr_a1)` or the return value of `or_fn`.
 */
export declare function map_andand_or</*@formatter:off*/ I extends unknown = unknown, O extends unknown = unknown>(/*@formatter:on*/ a1: I[], attr_a1: string[], or_fn: andand_or_fn_type<I, O>): (I | O)[];
export { map_andand_or as map__andand__or, };
