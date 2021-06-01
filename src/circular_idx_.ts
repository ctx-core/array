/**
 * Returns `idx` % `length`.
 */
export function circular_idx_(length:number, idx = 0):number {
	return ((length + (idx % length)) % length) || 0
}
export {
	circular_idx_ as _circular_idx,
	circular_idx_ as _idx__circular,
}
