import type { maybe } from '@ctx-core/function'
/**
 * Returns length of `in_a1`
 */
export function _a1_length<I = unknown>(in_a1:maybe<I[]>):undefined|number {
	return in_a1 ? (in_a1 as I[]).length : void 0
}
export const _length__a1 = _a1_length
