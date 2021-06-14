import type { is_match_fn_T } from './is_match_fn_T';
/**
 * Returns Array where items in `a` are filtered by `fn`.
 */
export declare function filter<Val extends unknown = unknown>(a: Val[], is_match_fn: is_match_fn_T<Val>): Val[];
export declare function maybe_filter<Val extends unknown = unknown>(maybe_a: Val[] | undefined, is_match_fn: is_match_fn_T<Val>): Val[] | undefined;
/**
 * Returns function that returns value from [filter](#filter) with `fn` argument.
 */
export declare function filter_<I extends unknown = unknown>(is_match_fn: is_match_fn_T<I>): (a: I[]) => I[];
export declare function maybe_filter_<I extends unknown = unknown>(is_match_fn: is_match_fn_T<I>): (maybe_a: I[] | undefined) => I[];
export { filter_ as _filter, filter_ as _fn__filter, maybe_filter_ as _maybe_filter, };
