import { falsy } from '@ctx-core/function'
import { I__ } from '@ctx-core/combinators'
import { _is_match_type } from './_is_match_type'
/**
 * Returns Array of `idx` indices filtered by `fn`.
 */
export function idx_filter(a1:falsy|any[], _is_match:_is_match_type=I__):undefined|any[] {
	if (!a1) return
	const idx_a1 = []
	for (let idx = 0; idx < a1.length; idx++) {
		const value = a1[idx]
		if (_is_match(value, idx)) {
			idx_a1.push(idx)
		}
	}
	return idx_a1
}
export const filter__idx = idx_filter
