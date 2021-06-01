import { circular_idx_ } from './circular_idx_'
/**
 * Returns Index of the next item, circular wrapping to the beginning (`0`).
 */
export function next_idx_(length:number, index = 0):number {
	return circular_idx_(length, index + 1)
}
export {
	next_idx_ as _next_idx,
	next_idx_ as _idx__next,
}
