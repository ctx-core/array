import type { maybe } from '@ctx-core/function';
import { reduce_fn_type } from './reduce';
/**
 * Return Function that returns from `reduce` with `fn` and factory `_memo(a1)`.
 */
export declare function _reduce<I = unknown, O = unknown>(fn: reduce_fn_type<I, O>, _memo: maybe<_memo_type<I, O>>): (a1: I[], memo: O) => O;
export declare const _fn__reduce: typeof _reduce;
export declare type _memo_type<I = unknown, O = unknown> = (a1: I[]) => O;
