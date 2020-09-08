import { _circular_idx } from './_circular_idx'
/**
 * Returns Index of the next item, circular wrapping to the beginning (`0`).
 */
export function _next_idx(length:number, index = 0):number {
	return _circular_idx(length, index + 1)
}
export const _idx__next = _next_idx
