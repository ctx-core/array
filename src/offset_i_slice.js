/**
 * Returns an Array from slicing an a from an a's offset from position i
 */
export function offset_i_slice(a, i, offset = 1) {
	return a.slice(i * offset, (i + 1) * offset)
}
export function maybe_offset_i_slice(maybe_a, i, offset = 1) {
	return maybe_a?.slice(i * offset, (i + 1) * offset)
}
export { offset_i_slice as slice__i__offset, }
