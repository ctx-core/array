import type { compare_1_type } from './compare_1_type'
/**
 * Returns the rank of the items where the compare function === 0
 */
export function rank</*@formatter:off*/
	I extends unknown = unknown
>(a1: I[], compare_1: compare_1_type): number {/*@formatter:on*/
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
