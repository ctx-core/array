import type { is_match_fn_T } from './is_match_fn_T.js'
/**
 * Returns idx of first match in `a` with `compare`.
 */
export function idx_<Val extends unknown = unknown>(
	in_a:Val[]|undefined, compare:is_match_fn_T<Val>
):number {
	if (in_a) {
		const a = in_a
		for (let idx = 0; idx < a.length; idx++) {
			const value = a[idx]
			if (
				value === compare
				|| (typeof compare === 'function' && compare(value, idx))
			) return idx
		}
	}
	return -1
}
export {
	idx_ as _idx,
}
