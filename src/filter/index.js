/**
 * Returns Array where items in `a` are filtered by `fn`.
 */
export function filter(a, is_match_fn) {
	const out_a = []
	for (let i = 0; i < a.length; i++) {
		const value = a[i]
		if (is_match_fn(value, i)) {
			out_a.push(value)
		}
	}
	return out_a
}
export function maybe_filter(
	maybe_a,
	is_match_fn,
	or = null
) {
	if (!maybe_a) return or
	return filter(maybe_a, is_match_fn)
}
/**
 * Returns function that returns value from [filter](#filter) with `fn` argument.
 */
export function filter_(is_match_fn) {
	return (a)=>filter(a, is_match_fn)
}
export function maybe_filter_(is_match_fn) {
	return (maybe_a)=>filter(maybe_a, is_match_fn)
}
export {
	filter_ as _filter,
	filter_ as _fn__filter,
	maybe_filter_ as _maybe_filter,
}
