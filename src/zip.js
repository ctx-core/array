import { zip_with } from './zip_with.js'
/**
 * Returns 2d Array of each item being the index value for each Array in `...a2`.
 */
export function zip(a2) {
	return zip_with(a2)
}
export function maybe_zip(a2) {
	if (!a2) return
	return zip(a2)
}
