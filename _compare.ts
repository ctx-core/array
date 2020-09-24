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
export const _fn__compare = _compare
/**
 * Compare function to sort by ascending order.
 */
export const asc_compare = _compare(true)
export const compare__asc = asc_compare
export const fn__compare__asc = asc_compare
/**
 * Compare function to sort by descending order.
 */
export const desc_compare = _compare(false)
export const compare__desc = desc_compare
export const fn__compare__desc = desc_compare
