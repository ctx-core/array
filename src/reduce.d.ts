/**
 * Returns reduced `memo` iterating over `a` with `fn(memo, a[], i, a)`.
 */
export declare function reduce<I extends unknown = unknown, O extends unknown = unknown>(a: I[], fn: reduce_fn_T<I, O>, memo: O): O;
export declare type reduce_fn_T<I extends unknown = unknown, O extends unknown = unknown> = (memo: O, item: I, idx: number, a: I[]) => O;
export declare function maybe_reduce<I extends unknown = unknown, O extends unknown = unknown>(maybe_a: I[] | undefined, fn: reduce_fn_T<I, O>, memo: O): O | undefined;
