import type { maybe, maybe_undefined } from '@ctx-core/function'
/**
 * Returns true if every `predicate(value)` is truthy
 */
export function every<I extends unknown = unknown>(
	a1:I[],
	predicate:(item:I, number, a1: I[])=>boolean
):boolean {
	let idx = -1
	const length = a1.length
	while (++idx < length) {
		if (!predicate(a1[idx] as I, idx, a1)) {
			return false
		}
	}
	return true
}
export const every_a1 = every
export const every__a1 = every
export function maybe_every<I extends unknown = unknown>(
	maybe_a1:maybe<I[]>,
	predicate:(item:I, number, a1: I[])=>boolean
):maybe_undefined<boolean> {
	if (!maybe_a1) return
	return every<I>(maybe_a1 as I[], predicate)
}
