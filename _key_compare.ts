/**
 * Return a compare function to sort on key values.
 */
export function _key_compare(key:any, asc = true):(a:any, b:any)=>number {
	return (a, b)=>{
		if (a[key] < b[key]) return asc ? -1 : 1
		if (a[key] > b[key]) return asc ? 1 : -1
		return 0
	}
}
export const _compare__key = _key_compare
export const _sort__key = _key_compare
export const _sort__key__a1 = _key_compare
