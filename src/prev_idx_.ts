import { circular_idx_ } from './circular_idx_.js'
/**
 * Returns Index of the previous item, circular wrapping to the end (`length - 1`).
 */
export function prev_idx_(length:number, index = 0):number {
	return circular_idx_(length, index - 1)
}
export {
	prev_idx_ as _prev_idx,
	prev_idx_ as _idx__prev,
}
