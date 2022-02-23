import type { is_match_fn_T } from './_types'
/**
 * Returns Array where items in `a` are filtered by `fn`.
 */
export declare function filter<Val extends unknown = unknown>(
	a:readonly Val[], is_match_fn:is_match_fn_T<Val>
):Val[];
export declare function maybe_filter<Val extends unknown = unknown, Or = null>(
	maybe_a:readonly Val[]|undefined, is_match_fn:is_match_fn_T<Val>, or?:Or
):Val[]|Or;
/**
 * Returns function that returns value from [filter](#filter) with `fn` argument.
 */
export declare function filter_<I extends unknown = unknown>(
	is_match_fn:is_match_fn_T<I>
):(a:readonly I[])=>I[];
export declare function maybe_filter_<I extends unknown = unknown>(
	is_match_fn:is_match_fn_T<I>
):(maybe_a:readonly I[]|undefined)=>I[];
export { filter_ as _filter, filter_ as _fn__filter, maybe_filter_ as _maybe_filter, }
