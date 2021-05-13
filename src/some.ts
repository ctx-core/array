/**
 * Returns true if some `predicate(value)` is truthy
 */
export function some<Val extends unknown = unknown, POut extends unknown = unknown>(
	a1:Val[], predicate:(val:Val, index:number, a1:Val[])=>POut
):boolean {
	let index = -1
	const length = a1.length
	while (++index < length) {
		if (predicate(a1[index], index, a1)) {
			return true
		}
	}
	return false
}
export {
	some as some_a1,
	some as some__a1,
}
