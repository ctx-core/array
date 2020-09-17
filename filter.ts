import type { maybe } from '@ctx-core/function'
import type { _is_match_type } from './_is_match_type'
/**
 * Returns Array where items in `a1` are filtered by `fn`.
 */
export function filter<I = unknown>(in_a1:maybe<I[]>, _is_match:_is_match_type<I>) {
	if (!in_a1) return
	const a1 = in_a1 as I[]
	const out_a1 = [] as I[]
	for (let i = 0; i < a1.length; i++) {
		const value = a1[i]
		if (_is_match(value, i)) {
			out_a1.push(value)
		}
	}
	return out_a1
}
