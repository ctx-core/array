import type { maybe_undefined, wrap_a2_item_type } from '@ctx-core/function';
/**
 * Returns 2d Array where each item being the return value of `fn` given the index value for each Array in `wrap_a2_type`.
 */
export declare function zipWith</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(a2: I[][], fn?: zipWidth_fn_type<I>): O;
export declare function maybe_zipWith</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(a2: I[][], fn?: zipWidth_fn_type<I>): maybe_undefined<O>;
export declare function _default_zipWith_fn</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(): zipWidth_fn_type<I>;
export declare type zipWidth_fn_type<I extends unknown = unknown> = (a1: I[], i: number) => I[];
export declare type zipWith_fn_type<I> = (arg_a1: wrap_a2_item_type<I>[], i: number) => wrap_a2_item_type<I>;
