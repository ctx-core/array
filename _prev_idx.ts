import { _circular_idx } from './_circular_idx'
/**
 * Returns Index of the previous item, circular wrapping to the end (`length - 1`).
 */
export function _prev_idx(length:number, index = 0):number {
	return _circular_idx(length, index - 1)
}
export const _idx__prev = _prev_idx
