import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Iterate over each item in `a1` with `fn(a1[i], i)`.
 */
export declare function each<I extends unknown>(a1: I[], fn: each_fn_type<I>): I[];
export declare function maybe_each<I extends unknown>(maybe_a1: maybe<I[]>, fn: each_fn_type<I>): maybe_undefined<I[]>;
export declare type each_fn_type<I> = (val: I, idx: number) => void;
