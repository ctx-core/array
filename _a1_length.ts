import type { maybe, maybe_undefined } from '@ctx-core/function'
/**
 * Returns length of `in_a1`
 */
export function _a1_length<I>(a1:I[]):number {
	return a1.length
}
export const _length__a1 = _a1_length
export function _maybe_a1_length<I>(maybe_a1:maybe<I[]>):maybe_undefined<number> {
	return maybe_a1 ? _a1_length<I>(maybe_a1 as I[]) : undefined
}
