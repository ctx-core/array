import type { is_match_fn_T } from './_types'
/**
 * Returns Array of indices `idx` not rejected by `is_match_`.
 */
export declare function idx_reject<Val extends unknown = unknown>(
	a:readonly Val[], is_match_:is_match_fn_T<Val>
):number[];
export declare function maybe_idx_reject<Val extends unknown = unknown>(
	maybe_a:readonly Val[]|undefined, is_match_:is_match_fn_T<Val>
):number[]|undefined;
export { idx_reject as reject__idx, }
