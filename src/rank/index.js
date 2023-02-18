/**
 * Returns the rank of the items where the compare function === 0
 * @param a{unknown[]}
 * @param compare_1{import('../_types').compare_1_T}
 * @returns {number}
 */
export function rank(a, compare_1) {
	let i_rank = 1
	for (let i = 0; i < a.length; i++) {
		if (compare_1(a[i]) > 0) {
			i_rank++
		}
	}
	return i_rank
}
export { rank as rank__a1, }
