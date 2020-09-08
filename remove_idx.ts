/**
 * Remove `count = 1` items from `a1` at position `idx`.
 */
export function remove_idx(a1:any[], idx:number, count = 1):any[] {
	return a1.splice(idx, count)
}
export const remove__idx = remove_idx
export const remove__index = remove_idx
