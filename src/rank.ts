import type { compare_1_T } from './compare_1_T'
/**
 * Returns the rank of the items where the compare function === 0
 */
export function rank</*@formatter:off*/
	I extends unknown = unknown
>/*@formatter:on*/(a:I[], compare_1:compare_1_T):number {
	let i_rank = 1
	for (let i = 0; i < a.length; i++) {
		if (compare_1(a[i]) > 0) {
			i_rank++
		}
	}
	return i_rank
}
export {
	rank as rank__a1,
}
