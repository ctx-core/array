import type { maybe } from '@ctx-core/function';
import { reduce_fn_type } from './reduce';
/**
 * Return Function that returns from `reduce` with `fn` and factory `_memo(a1)`.
 */
export declare function _reduce</*@formatter:off*/ I extends unknown = unknown, O extends unknown = unknown>(fn: reduce_fn_type<I, O>, _memo: _memo_type<I, O>): (a1: I[], memo: O) => O;
export declare type _memo_type</*@formatter:off*/ I extends unknown = unknown, O extends unknown = unknown> = (a1: I[]) => O;
export declare function _maybe_reduce</*@formatter:off*/ I extends unknown = unknown, O extends unknown = unknown>(fn: reduce_fn_type<I, maybe<O>>, _memo: maybe<_memo_type<I, O>>): (a1: I[], memo: O) => O;
export { _reduce as _fn__reduce };
