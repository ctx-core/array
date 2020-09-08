/**
 * Returns a random index in `a1`.
 */
export function _random_idx(a1:any[]):number {
	return Math.floor(Math.random() * a1.length)
}
export const idx__random = _random_idx
