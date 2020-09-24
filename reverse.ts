import type { maybe, maybe_undefined } from '@ctx-core/function'
/**
 * Reverses the order of items in `in_a1` by mutating `in_a1`.
 */
export function reverse<I extends unknown = unknown>(in_a1:I[]) {
	return in_a1.reverse()
}
export function maybe_reverse<I extends unknown = unknown>(maybe_a1:maybe<I[]>):maybe_undefined<I[]> {
	return maybe_a1 ? reverse<I>(maybe_a1 as I[]) : void 0
}
