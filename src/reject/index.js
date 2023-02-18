/** @typedef {import('../_types').is_match__T}is_match__T */
/**
 * Returns Array of items not rejected by `fn`.
 * @param a{unknown[]}
 * @param is_match_{is_match__T}
 * @returns {unknown}
 */
export function reject(a, is_match_) {
	return a.filter((value, idx)=>!is_match_(value, idx))
}
/**
 * @param maybe_a{unknown[]|undefined}
 * @param is_match_{is_match__T}
 * @param or{unknown}
 * @returns {unknown}
 */
export function maybe_reject(maybe_a, is_match_, or = null) {
	return maybe_a ? maybe_a.filter((value, idx)=>!is_match_(value, idx)) : or
}
