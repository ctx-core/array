import type { maybe } from '@ctx-core/function'
import type { _is_match_type } from './_is_match_type'
/**
 * Returns Array where items in `a1` are filtered by `fn`.
 */
export function filter<I extends unknown = unknown>(
	a1:I[],
	_is_match:_is_match_type<I>
) {
	const out_a1 = [] as I[]
	for (let i = 0; i < a1.length; i++) {
		const value = a1[i]
		if (_is_match(value, i)) {
			out_a1.push(value)
		}
	}
	return out_a1
}
export function maybe_filter<I extends unknown = unknown>(
	maybe_a1:maybe<I[]>,
	_is_match:_is_match_type<I>
):maybe<I[], undefined> {
	if (!maybe_a1) return
	return filter<I>(maybe_a1 as I[], _is_match)
}
