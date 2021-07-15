import { map } from './map.js'
/**
 * Returns Array of inverse values (1/n) of each item in `a`.
 */
export function map_inverse(a:number[]):number[] {
	return map(a, val=>val ? (1.0 / (val as number)) : 0)
}
export {
	map_inverse as map__inverse,
}
