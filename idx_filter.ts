import { I__ } from '@ctx-core/combinators'
import type { _is_match_type } from './_is_match_type'
import type { maybe } from '@ctx-core/function'
/**
 * Returns Array of `idx` indices filtered by `fn`.
 */
export function idx_filter<I = number>(
	in_a1:maybe<I[]>,
	_is_match = I__ as _is_match_type<I>
):maybe<number[], undefined> {
	if (!in_a1) return
	const a1 = in_a1 as I[]
	const idx_a1 = [] as number[]
	for (let idx = 0; idx < a1.length; idx++) {
		const value = a1[idx]
		if (_is_match(value, idx)) {
			idx_a1.push(idx)
		}
	}
	return idx_a1
}
export const filter__idx = idx_filter
