import type { maybe, maybe_undefined } from '@ctx-core/function'
import type { _is_match_type } from './_is_match_type'
/**
 * Returns Array of indices `idx` not rejected by `fn`.
 */
export function idx_reject<I extends unknown = unknown>(a1:I[], fn:_is_match_type<I>): number[] {
	const out_a1 = [] as number[]
	for (let idx = 0; idx < a1.length; idx++) {
		const value = a1[idx]
		if (fn(value, idx)) {
			out_a1.push(idx)
		}
	}
	return out_a1
}
export function maybe_idx_reject<I extends unknown = unknown>(
	maybe_a1:maybe<I[]>,
	fn:_is_match_type<I>
): maybe_undefined<number[]> {
	if (!maybe_a1) return
	return idx_reject<I>(maybe_a1 as I[], fn)
}
export {
	idx_reject as reject__idx,
}