import type { compare_type } from './compare_type'
/**
 * Returns a basic ascending or descending `compare` function to be used for sorting.
 */
export function _compare<I>(asc = true):compare_type<I> {
	return (a, b)=>{
		if (a < b) return asc ? -1 : 1
		if (a > b) return asc ? 1 : -1
		return 0
	}
}
export const _fn__compare = _compare
