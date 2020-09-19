import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Returns reduced `memo` iterating over `a1` with `fn(memo, a1[], i, a1)`.
 */
export declare function reduce<I, O = unknown>(a1: I[], fn: reduce_fn_type<I, O>, memo: O): O;
export declare type reduce_fn_type<I, O = unknown> = (memo: O, item: I, idx: number, a1: I[]) => O;
export declare function maybe_reduce<I, O = unknown>(maybe_a1: maybe<I[]>, fn: reduce_fn_type<I, O>, memo: O): maybe_undefined<O>;
