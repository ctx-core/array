/** @type {import('../_types').is_match__T}is_match__T */
/**
 * Returns Array of indices `idx` not rejected by `is_match_`.
 * @param a{unknown[]}
 * @param is_match_{is_match__T}
 * @returns {number[]}
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
/**
 * @param maybe_a{unknown[]|undefined}
 * @param is_match_{is_match__T}
 * @param or{number[]|null|undefined}
 * @returns {number[]|null|undefined}
 */
export function maybe_idx_reject(
	maybe_a,
	is_match_,
	or = null
) {
	if (!maybe_a) return or
	return idx_reject(maybe_a, is_match_)
}
export { idx_reject as reject__idx, }
