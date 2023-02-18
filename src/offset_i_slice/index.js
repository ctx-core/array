/**
 * Returns an Array from slicing an array from an array's offset from position i
 * @param a{unknown[]}
 * @param i{number}
 * @param offset{number}
 * @returns {unknown[]}
 */
export function offset_i_slice(a, i, offset = 1) {
	return a.slice(i * offset, (i + 1) * offset)
}
/**
 * @param maybe_a{unknown[]|undefined}
 * @param i{number}
 * @param offset{number}
 * @param or{unknown[]|null|undefined}
 * @returns {unknown[]|null|undefined}
 */
export function maybe_offset_i_slice(
	maybe_a,
	i,
	offset = 1,
	or = null
) {
	return maybe_a ? maybe_a.slice(i * offset, (i + 1) * offset) : or
}
export { offset_i_slice as slice__i__offset, }
