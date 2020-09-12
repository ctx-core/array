import type { falsy } from '@ctx-core/function';
/**
 * Iterate over each item in `a1` with `fn(a1[i], i)`.
 */
export declare function each(a1: falsy | any[], fn: (any: any, number: any) => any): undefined | any[];
