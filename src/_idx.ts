import type { maybe } from '@ctx-core/function'
import type { _is_match_T } from './_is_match_T'
/**
 * Returns idx of first match in `a1` with `compare`.
 */
export function _idx(
	in_a1: maybe<number[]>, compare: unknown|_is_match_T<number>
): number {
	if (in_a1) {
		const a1 = in_a1 as number[]
		for (let idx = 0; idx < a1.length; idx++) {
			const value = a1[idx]
			if (
				value === compare
				|| (typeof compare === 'function' && compare(value, idx))
			) return idx
		}
	}
	return -1
}
