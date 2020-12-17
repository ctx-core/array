import { slice } from './slice'
import { _key_compare } from './_key_compare'
/**
 * Returns an array sorted by `item.name`
 */
export function name_sort(a1:unknown[]):unknown[] {
	return (slice(a1, 0) || []).sort(_key_compare('name'))
}
export {
	name_sort as sort__name,
	name_sort as sort__name__a1,
}
