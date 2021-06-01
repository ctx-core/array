/**
 * Insert `...item_a` into `a` at position `idx`.
 */
export function insert<A extends unknown[] = unknown[]>(
	a:A, idx:number, ...item_a:A
):A {
	return a.splice(idx, 0, ...item_a) as A
}
