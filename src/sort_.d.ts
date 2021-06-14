import type { compare_T } from './compare_T';
/**
 * Returns a Function that calls [sort](#sort) with the given `compare` function.
 */
export declare function sort_<I extends unknown = unknown>(compare?: compare_T<I>): (a: I[]) => I[];
export declare function maybe_sort_<I extends unknown = unknown>(compare?: compare_T<I>): (maybe_a: I[] | undefined) => I[] | undefined;
export { sort_ as _sort, sort_ as _fn__sort, maybe_sort_ as _maybe_sort, };
