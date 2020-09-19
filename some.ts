/**
 * Returns true if some `predicate(value)` is truthy
 */
export function some<I>(a1:I[], predicate:(val: I, index: number, a1: I[])=>unknown):boolean {
	let index = -1
	const length = a1.length
	while (++index < length) {
		if (predicate(a1[index], index, a1)) {
			return true
		}
	}
	return false
}
export const some_a1 = some
export const some__a1 = some
