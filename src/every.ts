/**
 * Returns true if every `predicate(value)` is truthy
 */
export function every<I extends unknown = unknown>(
	a:I[],
	predicate:(item:I, idx:number, a:I[])=>boolean
):boolean {
	let idx = -1
	const length = a.length
	while (++idx < length) {
		if (!predicate(a[idx], idx, a)) {
			return false
		}
	}
	return true
}
export function maybe_every<I extends unknown = unknown>(
	maybe_a:I[]|undefined,
	predicate:(item:I, idx:number, a:I[])=>boolean
):boolean|undefined {
	if (!maybe_a) return
	return every<I>(maybe_a as I[], predicate)
}
export {
	every as every_a1,
	every as every__a1,
}
