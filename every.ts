/**
 * Returns true if every `predicate(value)` is truthy
 */
export function every(
	a1:any[],
	predicate:(item:any, number, a1)=>unknown
):boolean {
	if (!a1) return
	let idx = -1
	const length = a1.length
	while (++idx < length) {
		if (!predicate(a1[idx], idx, a1)) {
			return false
		}
	}
	return true
}
export const every_a1 = every
export const every__a1 = every
