import type { is_match_fn_T } from './is_match_fn_T';
/**
 * Returns function that returns value from [idx_reject](#idx_reject) with `is_match_` argument.
 */
export declare function idx_reject_<Val extends unknown = unknown>(is_match_: is_match_fn_T<Val>): (a: Val[]) => number[];
export { idx_reject_ as _idx_reject, idx_reject_ as _reject__idx, idx_reject_ as _fn__reject__idx, };
