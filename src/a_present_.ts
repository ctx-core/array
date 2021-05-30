import { a_length_ } from './a_length_'
/**
 * Returns true if `a` is has a length
 */
export function a_present_<Val extends unknown = unknown>(a:Val[]):boolean {
	return !!a_length_<Val>(a)
}
export function maybe_a_present_fn<Val extends unknown = unknown>(maybe_a:Val|undefined) {
	return a_present_<Val>(maybe_a as Val[])
}
export {
	a_present_ as a1_present_fn,
	a_length_ as _a1_present,
	a_present_ as _present__a1,
	maybe_a_present_fn as _maybea_present_,
	maybe_a_present_fn as maybea_present__fn,
}
