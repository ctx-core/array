import type { compare_T } from '../_types'
/**
 * Returns a Function that calls [sort](#sort) with the given `compare` function.
 */
export declare function sort_<I extends unknown = unknown>(compare?:compare_T<I>):(a:readonly I[])=>I[];
export declare function maybe_sort_<I extends unknown = unknown, Or = null>(
	compare?:compare_T<I>, or?:Or
):(maybe_a:readonly I[]|undefined)=>I[]|Or;
export { sort_ as _sort, sort_ as _fn__sort, maybe_sort_ as _maybe_sort, }
