import type { compare_type } from './compare_type'
/**
 * Returns a basic ascending or descending `compare` function to be used for sorting.
 */
export function _compare<I extends unknown = unknown>(asc = true):compare_type<I> {
	return (a, b)=>{
		if (a < b) return asc ? -1 : 1
		if (a > b) return asc ? 1 : -1
		return 0
	}
}
/**
 * Compare function to sort by ascending order.
 */
export const asc_compare = _compare(true)
/**
 * Compare function to sort by descending order.
 */
export const desc_compare = _compare(false)
export {
	_compare as _fn__compare,
	asc_compare as compare__asc,
	asc_compare as fn__compare__asc,
	desc_compare as compare__desc,
	desc_compare as fn__compare__desc,
}
