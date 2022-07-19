import { maybe_reject, reject } from '../reject/index.js'
/**
 * Returns function that returns value from [reject](#reject) with `fn` argument.
 */
export function reject_(is_match_) {
	return a=>reject(a, is_match_)
}
export function maybe_reject_(is_match_, or = null) {
	return a=>maybe_reject(a, is_match_, or)
}
export { reject_ as _reject, reject_ as _fn__reject, maybe_reject_ as _maybe_reject, }
