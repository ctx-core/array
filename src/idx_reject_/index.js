import { idx_reject } from '../idx_reject/index.js'
/** @type {import('../_types').is_match__T}is_match__T */
/**
 * Returns function that returns value from [idx_reject](#idx_reject) with `is_match_` argument.
 * @param is_match_{is_match__T}
 * @returns {(a:unknown[])=>number[]}
 */
export function idx_reject_(is_match_) {
	return a=>idx_reject(a, is_match_)
}
export {
	idx_reject_ as _idx_reject,
	idx_reject_ as _reject__idx,
	idx_reject_ as _fn__reject__idx,
}
