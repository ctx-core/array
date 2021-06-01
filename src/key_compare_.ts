/**
 * Return a compare function to sort on key values.
 */
export function key_compare_<Obj extends object|unknown[] = object>(
	key:keyof Obj, asc = true
):(a:Obj, b:Obj)=>number {
	return (a, b)=>{
		if (a[key] < b[key]) return asc ? -1 : 1
		if (a[key] > b[key]) return asc ? 1 : -1
		return 0
	}
}
export {
	key_compare_ as _key_compare,
	key_compare_ as _compare__key,
	key_compare_ as _sort__key,
	key_compare_ as _sort__key__a1,
}
