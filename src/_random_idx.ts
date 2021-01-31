/**
 * Returns a random index in `a1`.
 */
export function _random_idx(a1: unknown[]): number {
	return Math.floor(Math.random() * a1.length)
}
export {
	_random_idx as idx__random,
}
