/**
 * Returns true if some `predicate(value)` is truthy
 */
export function some<Val extends unknown = unknown, POut extends unknown = unknown>(
	a:Val[], predicate:(val:Val, index:number, a:Val[])=>POut
):boolean {
	let index = -1
	const length = a.length
	while (++index < length) {
		if (predicate(a[index], index, a)) {
			return true
		}
	}
	return false
}
export {
	some as some_a1,
	some as some__a1,
}
