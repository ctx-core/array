import type { falsy } from '@ctx-core/function';
import { reduce_fn_type } from './reduce';
/**
 * Return Function that returns from `reduce` with `fn` and factory `_memo(a1)`.
 * @param {function(*, *, number, Array)} fn
 * @param {function(Array)} _memo - Returns a `memo` for [reduce](#reduce)
 * @returns {function(Array, *): *}
 */
export declare function _reduce(fn: reduce_fn_type, _memo: falsy | _memo_type): any;
export declare const _fn__reduce: typeof _reduce;
export declare type _memo_type = (a1: any[]) => any;
