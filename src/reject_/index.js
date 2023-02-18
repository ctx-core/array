import { maybe_reject, reject } from '../reject/index.js'
/** @typedef {import('../_types').is_match__T}is_match__T */
/**
 * Returns function that returns value from [reject](#reject) with `fn` argument.
 * @param is_match_{is_match__T}
 * @returns {(a:unknown[])=>unknown}
 */
export function reject_(is_match_) {
	return a=>reject(a, is_match_)
}
/**
 * @param is_match_{is_match__T}
 * @param or{unknown}
 * @returns {(a:unknown[]|undefined)=>unknown}
 */
export function maybe_reject_(is_match_, or = null) {
	return a=>maybe_reject(a, is_match_, or)
}
export {
	reject_ as _reject,
	reject_ as _fn__reject,
	maybe_reject_ as _maybe_reject,
}
