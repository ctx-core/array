import type { compare_1_type } from './compare_1_type'
/**
 * Returns the rank of the items where the compare function === 0
 */
export function rank(a1:unknown[], compare_1:compare_1_type):number {
	let i_rank = 1
	for (let i = 0; i < a1.length; i++) {
		if (compare_1(a1[i]) > 0) {
			i_rank++
		}
	}
	return i_rank
}
export {
	rank as rank__a1,
}
