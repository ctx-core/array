/**
 * Insert `...item_a` into `a` at position `idx`.
 * @param a{unknown[]}
 * @param idx{number}
 * @param item_a{unknown}
 * @returns {unknown}
 */
export function insert(a, idx, ...item_a) {
	return a.splice(idx, 0, ...item_a)
}
