import type { is_match__T } from '../_types'
/**
 * Returns Array of indices `idx` not rejected by `is_match_`.
 */
export declare function idx_reject<
	Val extends unknown = unknown
>(
	a:readonly Val[], is_match_:is_match__T<Val>
):number[]
export declare function maybe_idx_reject<
	Val extends unknown = unknown, Or = null
>(
	maybe_a:readonly Val[]|undefined,
	is_match_:is_match__T<Val>,
	or?:Or
):number[]|Or
export { idx_reject as reject__idx, }
