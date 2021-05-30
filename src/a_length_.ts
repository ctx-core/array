/**
 * Returns length of `in_a`
 */
export function a_length_<Val extends unknown = unknown>(a:Val[]):number {
	return a.length
}
export function maybe_a_length$<Val extends unknown = unknown>(
	maybe_a:Val[]|undefined
):number|undefined {
	return maybe_a ? a_length_<Val>(maybe_a as Val[]) : undefined
}
export {
	a_length_ as a_length_fn,
	a_length_ as _a1_length,
	a_length_ as _length__a1,
	maybe_a_length$ as _maybe_a1_length,
	maybe_a_length$ as maybe_a1_length_fn,
}
