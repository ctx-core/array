import type { compare_type } from './compare_type';
import type { maybe } from '@ctx-core/function';
/**
 * Returns a Function that calls [sort](#sort) with the given `compare` function.
 */
export declare function _sort<I = unknown>(compare?: compare_type<I>): (a1: maybe<I[]>) => maybe<I[], undefined>;
export declare const _fn__sort: typeof _sort;
