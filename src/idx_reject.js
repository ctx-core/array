/**
 * Returns Array of indices `idx` not rejected by `is_match_`.
 */
export function idx_reject(a, is_match_) {
	const out_a = []
	for (let idx = 0; idx < a.length; idx++) {
		const value = a[idx]
		if (is_match_(value, idx)) {
			out_a.push(idx)
		}
	}
	return out_a
}
export function maybe_idx_reject(maybe_a, is_match_) {
	if (!maybe_a) return
	return idx_reject(maybe_a, is_match_)
}
export { idx_reject as reject__idx, }
