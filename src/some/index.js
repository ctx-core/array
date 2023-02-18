/**
 * Returns true if some `predicate(value)` is truthy
 * @param a{unknown[]}
 * @param predicate{(val:unknown, index:number, a:unknown[])=>unknown}
 * @returns {boolean}
 */
export function some(a, predicate) {
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
