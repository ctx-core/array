import type { falsy } from '@ctx-core/function'
import type { _is_match_type } from './_is_match_type'
/**
 * Returns Array of indices `idx` not rejected by `fn`.
 */
export function idx_reject(a1:falsy|any[], fn:_is_match_type):undefined|any[] {
	if (!a1) return
	const out_a1 = []
	for (let idx = 0; idx < a1.length; idx++) {
		const value = a1[idx]
		if (fn(value, idx)) {
			out_a1.push(idx)
		}
	}
	return out_a1
}
export const reject__idx = idx_reject
