import type { maybe } from '@ctx-core/function'
/**
 * Returns the first item in `a1_maybe`.
 */
export function _first<I = unknown>(a1_maybe:maybe<I[]>):undefined|I {
	return a1_maybe ? (a1_maybe[0] as I) : void 0
}
