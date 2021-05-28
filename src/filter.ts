import type { falsy } from '@ctx-core/function'
import type { _is_match_T } from './_is_match_T'
/**
 * Returns Array where items in `a1` are filtered by `fn`.
 */
export function filter<Val extends unknown = unknown>(
	a1:Val[],
	_is_match:_is_match_T<Val>
) {
	const out_a1 = [] as Val[]
	for (let i = 0; i < a1.length; i++) {
		const value = a1[i]
		if (_is_match(value, i)) {
			out_a1.push(value)
		}
	}
	return out_a1
}
export function maybe_filter<Val extends unknown = unknown>(
	maybe_a1:Val[]|falsy,
	_is_match:_is_match_T<Val>
):Val[]|undefined {
	if (!maybe_a1) return
	return filter<Val>(maybe_a1 as Val[], _is_match)
}
