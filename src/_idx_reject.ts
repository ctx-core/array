import { idx_reject } from './idx_reject'
import type { _is_match_type } from './_is_match_type'
/**
 * Returns function that returns value from [idx_reject](#idx_reject) with `fn` argument.
 */
export function _idx_reject<Val extends unknown = unknown>(fn:_is_match_type<Val>) {
	return (a1:Val[])=>idx_reject<Val>(a1, fn)
}
export {
	_idx_reject as _reject__idx,
	_idx_reject as _fn__reject__idx,
}
