import { key_compare_ } from './key_compare_.js'
import { slice } from './slice.js'
/**
 * Returns an array sorted by `item.name`
 */ export function name_sort(a) {
	return (slice(a, 0) || []).sort(key_compare_('name'))
}
export { name_sort as sort__name, name_sort as sort__name__a1, }
//# sourceMappingURL=name_sort.js.map