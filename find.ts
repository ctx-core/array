import type { _is_match_type } from './_is_match_type'
import type { maybe } from '@ctx-core/function'
/**
 * Returns first item in `a1` where `fn(a1[idx], idx)` is truthy.
 */
export function find<I = unknown>(
	a1_maybe:maybe<I[]>,
	fn:_is_match_type<I>
):maybe<I, undefined> {
	if (!a1_maybe) return
	const a1 = a1_maybe as I[]
	for (let idx = 0; idx < a1.length; idx++) {
		const val = a1[idx]
		const map_val = fn(val, idx)
		if (map_val) return val
	}
}
