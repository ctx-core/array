import type { falsy } from '@ctx-core/function'
import type { _is_match_type } from './_is_match_type'
/**
 * Returns first item in `a1` where `fn(a1[idx], idx)` is truthy.
 */
export function find<I extends unknown = unknown>(
	a1:I[], fn:_is_match_type<I>
):I|undefined {
	for (let idx = 0; idx < a1.length; idx++) {
		const val = a1[idx]
		const map_val = fn(val, idx)
		if (map_val) return val
	}
	return undefined
}
export function maybe_find<I extends unknown = unknown>(
	maybe_a1:I[]|falsy, fn:_is_match_type<I>
):I|undefined {
	if (!maybe_a1) return
	return find<I>(maybe_a1 as I[], fn)
}
