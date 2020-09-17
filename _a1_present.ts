import { _a1_length } from './_a1_length'
import type { maybe } from '@ctx-core/function'
/**
 * Returns true if `a1` is has a length
 */
export function _a1_present<I = unknown>(a1:maybe<I[]>):boolean {
	return !!_a1_length<I>(a1)
}
export const _present__a1 = _a1_present
