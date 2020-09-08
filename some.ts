/**
 * Returns true if some `predicate(value)` is truthy
 */
export function some(a1:any[], predicate:(any, number, a1)=>unknown):boolean {
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
