import type { _is_match_type } from './_is_match_type';
/**
 * Returns function that returns value from [idx_reject](#idx_reject) with `fn` argument.
 */
export declare function _idx_reject<Val extends unknown = unknown>(fn: _is_match_type<Val>): (a1: Val[]) => number[];
export { _idx_reject as _reject__idx, _idx_reject as _fn__reject__idx, };
