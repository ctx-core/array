import type { falsy } from '@ctx-core/function'
/**
 * Returns true if every `predicate(value)` is truthy
 */
export function every<I extends unknown = unknown>(
	a1:I[],
	predicate:(item:I, idx:number, a1:I[])=>boolean
):boolean {
	let idx = -1
	const length = a1.length
	while (++idx < length) {
		if (!predicate(a1[idx], idx, a1)) {
			return false
		}
	}
	return true
}
export function maybe_every<I extends unknown = unknown>(
	maybe_a1:I[]|falsy,
	predicate:(item:I, idx:number, a1:I[])=>boolean
):boolean|undefined {
	if (!maybe_a1) return
	return every<I>(maybe_a1 as I[], predicate)
}
export {
	every as every_a1,
	every as every__a1,
}
