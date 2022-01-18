import { idx_reject } from './idx_reject.js'
/**
 * Returns function that returns value from [idx_reject](#idx_reject) with `is_match_` argument.
 */
export function idx_reject_(is_match_) {
	return (a)=>idx_reject(a, is_match_)
}
export { idx_reject_ as _idx_reject, idx_reject_ as _reject__idx, idx_reject_ as _fn__reject__idx, }
