import { slice } from './slice.js'
import { key_compare_ } from './key_compare_.js'
/**
 * Returns an array sorted by `item.name`
 */
export function name_sort<Obj extends { name:string } = { name:string }>(a:Obj[]):Obj[] {
	return (slice(a, 0) || []).sort(key_compare_<Obj>('name'))
}
export {
	name_sort as sort__name,
	name_sort as sort__name__a1,
}
