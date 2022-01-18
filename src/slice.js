/**
 * Calls slice on a
 */
export function slice(a, begin_idx, end_idx) {
	return a.slice(begin_idx, end_idx)
}
export function maybe_slice(maybe_a, begin_idx, end_idx) {
	return maybe_a ? slice(maybe_a, begin_idx, end_idx) : undefined
}
