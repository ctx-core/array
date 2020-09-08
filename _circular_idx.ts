/**
 * Returns `idx` % `length`.
 */
export function _circular_idx(length:number, idx = 0):number {
	return ((length + (idx % length)) % length) || 0
}
export const _idx__circular = _circular_idx
