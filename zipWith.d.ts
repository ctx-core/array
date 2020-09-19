import type { a2_nowrap_type, maybe_undefined } from '@ctx-core/function';
/**
 * Returns 2d Array where each item being the return value of `fn` given the index value for each Array in `a2_nowrap_type`.
 */
export declare function zipWith<I>(a2_nowrap: a2_nowrap_type<I>, fn?: zipWith_fn_type<I>): I[];
export declare function maybe_zipWith<I>(a2_nowrap: a2_nowrap_type<I>, fn?: zipWith_fn_type<I>): maybe_undefined<I[]>;
export declare type zipWith_fn_type<I> = ((arg_a1: I[], i: number) => I);
