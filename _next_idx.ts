import { _circular_idx } from './_circular_idx'
/**
 * Returns Index of the next item, circular wrapping to the beginning (`0`).
 */
export function _next_idx(length:number, index = 0):number {
	return _circular_idx(length, index + 1)
}
export {
	_next_idx as _idx__next
}
