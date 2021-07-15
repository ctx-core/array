import type { is_match_fn_T } from './is_match_fn_T.js'
/**
 * Returns Array where items in `a` are filtered by `fn`.
 */
export function filter<Val extends unknown = unknown>(
	a:Val[],
	is_match_fn:is_match_fn_T<Val>
):Val[] {
	const out_a = [] as Val[]
	for (let i = 0; i < a.length; i++) {
		const value = a[i]
		if (is_match_fn(value, i)) {
			out_a.push(value)
		}
	}
	return out_a
}
export function maybe_filter<Val extends unknown = unknown>(
	maybe_a:Val[]|undefined,
	is_match_fn:is_match_fn_T<Val>
):Val[]|undefined {
	if (!maybe_a) return
	return filter<Val>(maybe_a as Val[], is_match_fn)
}
/**
 * Returns function that returns value from [filter](#filter) with `fn` argument.
 */
export function filter_<I extends unknown = unknown>(
	is_match_fn:is_match_fn_T<I>
) {
	return (a:I[])=>filter<I>(a, is_match_fn)
}
export function maybe_filter_<I extends unknown = unknown>(
	is_match_fn:is_match_fn_T<I>
) {
	return (maybe_a:I[]|undefined)=>filter<I>(maybe_a as I[], is_match_fn)
}
export {
	filter_ as _filter,
	filter_ as _fn__filter,
	maybe_filter_ as _maybe_filter,
}
