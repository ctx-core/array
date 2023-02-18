import { zip_with } from '../zip_with/index.js'
/**
 * Returns 2d Array of each item being the index value for each Array in `...a2`.
 * @param a2{unknown[][]}
 * @returns {unknown[][]}
 */
export function zip(a2) {
	return zip_with(a2)
}
/**
 * @param a2{unknown[][]|undefined}
 * @returns {unknown[][]|undefined}
 */
export function maybe_zip(a2) {
	if (!a2) return
	return zip(a2)
}
