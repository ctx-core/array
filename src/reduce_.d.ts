import { reduce_fn_T } from './reduce.js'
/**
 * Return Function that returns from `reduce` with `fn` and factory `memo_(a)`.
 */
export declare function reduce_</*@formatter:off*/ I extends unknown = unknown, O extends unknown = unknown>(fn: reduce_fn_T<I, O>, memo_: memo_fn_T<I, O>): (a: I[], memo: O) => O;
export declare type memo_fn_T</*@formatter:off*/ I extends unknown = unknown, O extends unknown = unknown> = (a: I[]) => O;
export declare function maybe_reduce_</*@formatter:off*/ I extends unknown = unknown, O extends unknown = unknown>(fn: reduce_fn_T<I, O | undefined>, memo_fn: memo_fn_T<I, O> | undefined): (a: I[], memo: O) => O;
export { reduce_ as _reduce, reduce_ as _fn__reduce, maybe_reduce_ as _maybe_reduce, };
