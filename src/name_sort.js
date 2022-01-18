import { key_compare_ } from './key_compare_.js'
/**
 * Returns an array sorted by `item.name`
 */
export function name_sort(a) {
	return (a.slice(0) || []).sort(key_compare_('name'))
}
export { name_sort as sort__name, name_sort as sort__name__a1, }
