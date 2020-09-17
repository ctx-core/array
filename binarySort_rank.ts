import type { compare_1_type } from './compare_1_type'
/**
 * Returns the rank of the item where the compare function === 0, using binarySort
 */
export function binarySort_rank(a1:unknown[], compare_1:compare_1_type):number {
	let min_index = 0
	let max_index = a1.length - 1
	let current_index
	let current_element
	while (min_index <= max_index) {
		current_index = (min_index + max_index) / 2 | 0
		current_element = a1[current_index]
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
export const rank__binarySort = binarySort_rank
export const rank__binarySort__a1 = rank__binarySort
