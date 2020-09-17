import type { _is_match_type } from './_is_match_type'
import type { maybe } from '@ctx-core/function'
/**
 * Returns Array of indices `idx` not rejected by `fn`.
 */
export function idx_reject<I = unknown>(
	in_a1:maybe<I[]>,
	fn:_is_match_type<I>
): maybe<number[], undefined> {
	if (!in_a1) return
	const a1 = in_a1 as I[]
	const out_a1 = [] as number[]
	for (let idx = 0; idx < a1.length; idx++) {
		const value = a1[idx]
		if (fn(value, idx)) {
			out_a1.push(idx)
		}
	}
	return out_a1
}
export const reject__idx = idx_reject
