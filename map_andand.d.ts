import { andand_name_type, maybe } from '@ctx-core/function';
/**
 * Returns Array of mapped `a1` with `_andand(...name_a1)`.
 */
export declare function map_andand<I extends unknown, O extends unknown>(a1: I[], ...name_a1: andand_name_type<I, O>[]): (I | O)[];
export declare const map__andand: typeof map_andand;
export declare function maybe_map_andand<I extends unknown, O extends unknown>(a1: maybe<I[]>, ...name_a1: andand_name_type<I, O>[]): maybe<O[], undefined>;
