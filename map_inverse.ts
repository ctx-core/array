import { map } from './map'
import type { maybe } from '@ctx-core/function'
/**
 * Returns Array of inverse values (1/n) of each item in `a1`.
 */
export function map_inverse(a1: maybe<number[]>) {
	return map(a1, val=>val ? (1.0 / (val as number)) : 0)
}
export const map__inverse = map_inverse
