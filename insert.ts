/**
 * Insert `...item_a1` into `a1` at position `idx`.
 */
export function insert(a1:any[], idx:number, ...item_a1:any):any[] {
	return a1.splice(idx, 0, ...item_a1)
}
