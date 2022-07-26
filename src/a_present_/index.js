import { a_length_ } from '../a_length_/index.js'
/**
 * Returns true if `a` is has a length
 */
export function a_present_(a) {
	return !!a_length_(a)
}
export function maybe_a_present_fn(maybe_a, or = false) {
	return maybe_a ? a_present_(maybe_a) : or
}
export {
	a_present_ as a1_present_fn,
	a_length_ as _a1_present,
	a_present_ as _present__a1,
	maybe_a_present_fn as _maybea_present_,
	maybe_a_present_fn as maybea_present__fn,
}