import type { is_match_fn_T } from './_types'
/**
 * Returns idx of first match in `a` with `compare`.
 */
export declare function idx_<Val extends unknown = unknown>(in_a:Val[]|undefined, compare:is_match_fn_T<Val>):number;
export { idx_ as _idx, }
