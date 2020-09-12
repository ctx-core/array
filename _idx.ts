import type { falsy } from '@ctx-core/function'
import type { _is_match_type } from './_is_match_type'
/**
 * Returns idx of first match in `a1` with `compare`.
 */
export function _idx(a1:falsy|any[], compare:any|_is_match_type):number {
	if (a1) {
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
