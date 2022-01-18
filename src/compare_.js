/**
 * Returns a basic ascending or descending `compare` function to be used for sorting.
 */
export function compare_(asc = true) {
	return (a, b)=>{
		if (a < b) return asc ? -1 : 1
		if (a > b) return asc ? 1 : -1
		return 0
	}
}
/**
 * Compare function to sort by ascending order.
 */
export const asc_compare = compare_(true)
/**
 * Compare function to sort by descending order.
 */
export const desc_compare = compare_(false)
export {
	compare_ as _compare,
	compare_ as _fn__compare,
	asc_compare as compare__asc,
	asc_compare as fn__compare__asc,
	desc_compare as compare__desc,
	desc_compare as fn__compare__desc,
}
