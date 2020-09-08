/**
 * Returns 2d Array where `source_a1` is destructured into subarray of length `offset`.
 */
export function _offset_destructure_a2(source_a1, offset = 1) {
	const offset_destructure_a2 = []
	for (let i = 0; i < offset; i++) {
		offset_destructure_a2.push([])
	}
	for (let i = 0; i < source_a1.length; i++) {
		const val = source_a1[i]
		offset_destructure_a2[i % offset].push(val)
	}
	return offset_destructure_a2
}
export const _a2__destructure__offset = _offset_destructure_a2
