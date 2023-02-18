/**
 * Returns Array of inverse values (1/n) of each item in `a`.
 * @param a{number[]}
 * @returns {number[]}
 */
export function map_inverse(a) {
	return a.map(val=>val ? 1 / val : 0)
}
export { map_inverse as map__inverse, }
