import { _a1_length } from './_a1_length'
import type { maybe } from '@ctx-core/function'
/**
 * Returns true if `a1` is has a length
 */
export function _a1_present<I extends unknown>(a1:I[]):boolean {
	return !!_a1_length<I>(a1)
}
export const _present__a1 = _a1_present
export function _maybe_a1_present<I extends unknown>(maybe_a1:maybe<I>) {
	return _a1_present<I>(maybe_a1 as I[])
}
