/**
 * Returns Array of items not rejected by `fn`.
 */
export function reject(a, is_match_) {
	return a.filter((value, idx)=>!is_match_(value, idx))
}
export function maybe_reject(maybe_a, is_match_) {
	return maybe_a?.filter((value, idx)=>!is_match_(value, idx))
}
