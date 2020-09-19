import type { maybe } from '@ctx-core/function';
/**
 * Sort `val_a1` by an array of indices in `in_sort_idx_a1`.
 */
export declare function _idx_sort_a1<I extends unknown[]>(val_a1: I, in_sort_idx_a1: maybe<number[]>): I;
export declare const _a1__sort__idx: typeof _idx_sort_a1;
export declare function _maybe_idx_sort_a1<I extends unknown[]>(in_val_a1: maybe<I>, in_sort_idx_a1: maybe<number[]>): maybe<I, undefined>;
