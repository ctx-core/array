import { I__ } from '@ctx-core/combinators'
/**
 * Returns Array of `idx` indices filtered by `fn`.
 */
export function idx_filter(in_a, is_match_ = I__) {
	const a = in_a
	const idx_a = []
	for (let idx = 0; idx < a.length; idx++) {
		const value = a[idx]
		if (is_match_(value, idx)) {
			idx_a.push(idx)
		}
	}
	return idx_a
}
export function maybe_idx_filter(maybe_a, is_match_ = I__, or = null) {
	if (!maybe_a) return or
	return idx_filter(maybe_a, is_match_)
}
/**
 * Returns function that returns value from [idx_filter](#idx_filter) with `fn` argument.
 */
export function idx_filter_(is_match_ = I__) {
	return (a)=>idx_filter(a, is_match_)
}
export function maybe_idx_filter_(is_match_ = I__) {
	return (a)=>maybe_idx_filter(a, is_match_)
}
export {
	idx_filter as filter__idx,
	idx_filter_ as _idx_filter,
	maybe_idx_filter_ as _maybe_idx_filter,
	idx_filter_ as _filter__idx,
	idx_filter_ as _fn__filter__idx,
}
