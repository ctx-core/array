import { andand_name_type, maybe } from '@ctx-core/function';
/**
 * Returns Array of mapped `a1` with `_andand(...name_a1)`.
 */
export declare function map_andand<Val extends unknown = unknown, Out extends unknown = unknown>(a1: Val[], ...name_a1: andand_name_type<Val, Out>[]): Out[];
export declare function maybe_map_andand<Val extends unknown, Out extends unknown>(a1: maybe<Val[]>, ...name_a1: andand_name_type<Val, Out>[]): Out[] | undefined;
export { map_andand as map__andand, };
