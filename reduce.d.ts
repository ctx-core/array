import { falsy } from '@ctx-core/function';
/**
 * Returns reduced `memo` iterating over `a1` with `fn(memo, a1[], i, a1)`.
 */
export declare function reduce(a1: falsy | any[], fn: reduce_fn_type, memo: any): undefined | any;
export declare type reduce_fn_type = (memo: any, item: any, idx: number, a1: any[]) => any[];
