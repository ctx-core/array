/**
 * Returns an Array from slicing an array from an array's offset from position i
 */
export function offset_i_slice(a, i, offset = 1) {
	return a.slice(i * offset, (i + 1) * offset)
}
export function maybe_offset_i_slice(
	maybe_a,
	i,
	offset = 1,
	or = null
) {
	return maybe_a ? maybe_a.slice(i * offset, (i + 1) * offset) : or
}
export { offset_i_slice as slice__i__offset, }
