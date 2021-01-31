import { map } from './map'
/**
 * Returns Array of inverse values (1/n) of each item in `a1`.
 */
export function map_inverse(a1: number[]) {
	return map(a1, val => val ? (1.0 / (val as number)) : 0)
}
export {
	map_inverse as map__inverse,
}
