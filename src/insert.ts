/**
 * Insert `...item_a` into `a` at position `idx`.
 */
export function insert(a:unknown[], idx:number, ...item_a:any):unknown[] {
	return a.splice(idx, 0, ...item_a)
}
