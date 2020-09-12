import type { falsy } from '@ctx-core/function'
import type { _is_match_type } from './_is_match_type'
/**
 * Returns Array where items in `a1` are filtered by `fn`.
 */
export function filter(a1:falsy|any[], _is_match:_is_match_type):undefined|any[] {
	if (!a1) return
	const out_a1 = []
	for (let i = 0; i < a1.length; i++) {
		const value = a1[i]
		if (_is_match(value, i)) {
			out_a1.push(value)
		}
	}
	return out_a1
}
