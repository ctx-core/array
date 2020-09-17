/**
 * Insert `...item_a1` into `a1` at position `idx`.
 */
export function insert(a1:unknown[], idx:number, ...item_a1:any):unknown[] {
	return a1.splice(idx, 0, ...item_a1)
}
