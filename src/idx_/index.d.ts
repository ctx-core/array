import type { is_match__T } from '../_types'
/**
 * Returns idx of first match in `a` with `compare`.
 */
export declare function idx_<
	Val extends unknown = unknown
>(
	in_a:readonly Val[]|undefined,
	compare:is_match__T<Val>
):number
export { idx_ as _idx, }
