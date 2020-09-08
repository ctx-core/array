import { falsy } from '@ctx-core/function';
/**
 * Returns first return value of `fn(a1[idx], idx)` where `fn(a1[idx], idx)` is truthy.
 */
export declare function map_find(a1: falsy | any[], fn: (any: any, number: any) => falsy | any[]): undefined | any[];
export declare const find__map: typeof map_find;
