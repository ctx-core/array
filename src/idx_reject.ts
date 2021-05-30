import type { is_match_fn_T } from './is_match_fn_T'
/**
 * Returns Array of indices `idx` not rejected by `is_match_`.
 */
export function idx_reject<Val extends unknown = unknown>(
	a:Val[], is_match_:is_match_fn_T<Val>
):number[] {
	const out_a = [] as number[]
	for (let idx = 0; idx < a.length; idx++) {
		const value = a[idx]
		if (is_match_(value, idx)) {
			out_a.push(idx)
		}
	}
	return out_a
}
export function maybe_idx_reject<Val extends unknown = unknown>(
	maybe_a:Val[]|undefined,
	is_match_:is_match_fn_T<Val>
):number[]|undefined {
	if (!maybe_a) return
	return idx_reject<Val>(maybe_a as Val[], is_match_)
}
export {
	idx_reject as reject__idx,
}
