import type { maybe, maybe_undefined } from '@ctx-core/function';
import type { compare_type } from './compare_type';
/**
 * Returns a Function that calls [sort](#sort) with the given `compare` function.
 */
export declare function _sort<I extends unknown = unknown>(compare?: compare_type<I>): (a1: I[]) => I[];
export declare function _maybe_sort<I extends unknown = unknown>(compare?: compare_type<I>): (maybe_a1: maybe<I[]>) => maybe_undefined<I[]>;
export { _sort as _fn__sort, };
