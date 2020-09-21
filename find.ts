import type { _is_match_type } from './_is_match_type'
import type { maybe, maybe_undefined } from '@ctx-core/function'
/**
 * Returns first item in `a1` where `fn(a1[idx], idx)` is truthy.
 */
export function find<I extends unknown>(
	a1:I[], fn:_is_match_type<I>
):maybe_undefined<I> {
	for (let idx = 0; idx < a1.length; idx++) {
		const val = a1[idx]
		const map_val = fn(val, idx)
		if (map_val) return val
	}
}
export function maybe_find<I extends unknown>(
	maybe_a1:maybe<I[]>, fn:_is_match_type<I>
):maybe_undefined<I> {
	if (!maybe_a1) return
	return find<I>(maybe_a1 as I[], fn)
}
