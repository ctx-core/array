/**
 * Remove `count = 1` items from `a1` at position `idx`.
 */
export function remove_idx</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	a1: I[], idx: number, count = 1
): O {
	return a1.splice(idx, count) as O
}
export {
	remove_idx as remove__idx,
	remove_idx as remove__index,
}
