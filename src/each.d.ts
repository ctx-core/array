/**
 * Iterate over each item in `a` with `fn(a[i], i)`.
 */
export declare function each<I extends unknown = unknown>(a: I[], fn: each_fn_T<I>): I[];
export declare function maybe_each<I extends unknown = unknown>(maybe_a: I[] | undefined, fn: each_fn_T<I>): I[] | undefined;
export declare type each_fn_T<I> = (val: I, idx: number) => void;
