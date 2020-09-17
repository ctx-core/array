import type { maybe } from '@ctx-core/function';
/**
 * Returns reduced `memo` iterating over `a1` with `fn(memo, a1[], i, a1)`.
 */
export declare function reduce<I = unknown, O = unknown>(in_a1: maybe<I[]>, fn: reduce_fn_type<I, O>, memo: O): maybe<O, undefined>;
export declare type reduce_fn_type<I = unknown, O = unknown> = (memo: O, item: I, idx: number, a1: I[]) => O;
