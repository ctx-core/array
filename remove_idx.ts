/**
 * Remove `count = 1` items from `a1` at position `idx`.
 */
export function remove_idx(a1:unknown[], idx:number, count = 1):unknown[] {
	return a1.splice(idx, count)
}
export {
	remove_idx as remove__idx,
	remove_idx as remove__index,
}
