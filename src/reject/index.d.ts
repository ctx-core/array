import type { is_match__T } from '../_types'
/**
 * Returns Array of items not rejected by `fn`.
 */
export declare function reject<
	Val extends unknown = unknown, Out extends unknown = readonly Val[]
>(
	a:readonly Val[], is_match_:is_match__T<Val>
):Out
export declare function maybe_reject<
	Val extends unknown = unknown,
	Out extends unknown = readonly Val[],
	Or = null
>(
	maybe_a:readonly Val[]|undefined,
	is_match_:is_match__T<Val>,
	or?:Or
):Out|Or
