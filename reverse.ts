import type { maybe } from '@ctx-core/function'
/**
 * Reverses the order of items in `in_a1` by mutating `in_a1`.
 */
export function reverse<I = unknown>(in_a1:maybe<I[]>):maybe<I[], undefined> {
	return in_a1 ? (in_a1 as I[]).reverse() : void 0
}
