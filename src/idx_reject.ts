import type { falsy } from '@ctx-core/function'
import type { _is_match_T } from './_is_match_T'
/**
 * Returns Array of indices `idx` not rejected by `fn`.
 */
export function idx_reject<Val extends unknown = unknown>(a1:Val[], fn:_is_match_T<Val>):number[] {
	const out_a1 = [] as number[]
	for (let idx = 0; idx < a1.length; idx++) {
		const value = a1[idx]
		if (fn(value, idx)) {
			out_a1.push(idx)
		}
	}
	return out_a1
}
export function maybe_idx_reject<Val extends unknown = unknown>(
	maybe_a1:Val[]|falsy,
	fn:_is_match_T<Val>
):number[]|undefined {
	if (!maybe_a1) return
	return idx_reject<Val>(maybe_a1 as Val[], fn)
}
export {
	idx_reject as reject__idx,
}
