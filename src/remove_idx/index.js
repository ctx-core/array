/**
 * Remove `count = 1` items from `a` at position `idx`.
 * @param a{unknown[]}
 * @param idx{number}
 * @param count{number}
 * @returns {unknown[]}
 */
export function remove_idx(a, idx, count = 1) {
	return a.splice(idx, count)
}
export {
	remove_idx as remove__idx,
	remove_idx as remove__index,
}
