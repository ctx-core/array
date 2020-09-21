import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Returns a `slice` function with the given `...arg_a1` that takes a Array `a1` as it's argument.
 */
export declare function _slice<I extends unknown>(begin_idx?: number, end_idx?: number): (a1: I[]) => I[];
export declare const _fn__slice: typeof _slice;
export declare function _maybe_slice<I extends unknown>(begin_idx?: number, end_idx?: number): (maybe_a1: maybe<I[]>) => maybe_undefined<I[]>;
