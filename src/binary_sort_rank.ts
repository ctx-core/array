import type { compare_1_T } from './compare_1_T'
/**
 * Returns the rank of the item where the compare function === 0, using binarySort
 */
export function binary_sort_rank(a:unknown[], compare_1:compare_1_T):number {
	let min_index = 0
	let max_index = a.length - 1
	let current_index
	let current_element
	while (min_index <= max_index) {
		current_index = (min_index + max_index) / 2 | 0
		current_element = a[current_index]
		const compare__sort = compare_1(current_element, current_index)
		if (compare__sort > 0) {
			min_index = current_index + 1
		} else if (compare__sort < 0) {
			max_index = current_index - 1
		} else {
			return current_index
		}
	}
	return -1
}
export {
	binary_sort_rank as binarySort_rank,
	binary_sort_rank as rank__binarySort,
	binary_sort_rank as rank__binarySort__a1,
}
