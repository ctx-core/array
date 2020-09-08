/**
 * Returns Array of inverse values (1/n) of each item in `a1`.
 */
import { map } from './map'
export function map_inverse(a1) {
	return map(a1, val=>val ? (1.0 / val) : 0)
}
export const map__inverse = map_inverse
