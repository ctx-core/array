import { slice } from './slice'
import { _key_compare } from './_key_compare'
/**
 * Returns an array sorted by `item.name`
 */
export function name_sort(a1:any[]):any[] {
	return (slice(a1, 0) || []).sort(_key_compare('name'))
}
export const sort__name = name_sort
export const sort__name__a1 = sort__name
