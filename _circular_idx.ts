/**
 * Returns `idx` % `length`.
 */
export function _circular_idx(length:number, idx = 0) {
	return ((length + (idx % length)) % length) || 0
}
export {
	_circular_idx as _idx__circular,
}
