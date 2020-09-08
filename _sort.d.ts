import { falsy } from '@ctx-core/function';
import { compare_type } from './compare_type';
/**
 * Returns a Function that calls [sort](#sort) with the given `compare` function.
 */
export declare function _sort(compare?: compare_type): (a1: falsy | any[]) => undefined | any[];
export declare const _fn__sort: typeof _sort;
