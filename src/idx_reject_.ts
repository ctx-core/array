import { idx_reject } from './idx_reject'
import type { is_match_fn_T } from './is_match_fn_T'
/**
 * Returns function that returns value from [idx_reject](#idx_reject) with `is_match_` argument.
 */
export function idx_reject_<Val extends unknown = unknown>(
	is_match_:is_match_fn_T<Val>
):(a:Val[])=>number[] {
	return (a:Val[])=>idx_reject<Val>(a, is_match_)
}
export {
	idx_reject_ as _idx_reject,
	idx_reject_ as _reject__idx,
	idx_reject_ as _fn__reject__idx,
}
