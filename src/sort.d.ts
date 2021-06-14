import type { compare_T } from './compare_T';
/**
 * Sort items in `a` by the `compare` function
 */
export declare function sort</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(a: I[], compare?: compare_T<I>): O;
export declare function maybe_sort</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(maybe_a: I[] | undefined, compare?: compare_T<I>): O | undefined;
