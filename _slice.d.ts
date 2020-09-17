import type { maybe } from '@ctx-core/function';
/**
 * Returns a `slice` function with the given `...arg_a1` that takes a Array `a1` as it's argument.
 */
export declare function _slice<I = unknown>(begin_idx?: number, end_idx?: number): (a1: maybe<I[]>) => maybe<I[], undefined>;
export declare const _fn__slice: typeof _slice;
