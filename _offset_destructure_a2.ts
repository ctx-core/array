/**
 * Returns 2d Array where `source_a1` is destructured into subarray of length `offset`.
 */
export function _offset_destructure_a2<I extends unknown = unknown>(
	source_a1:I[], offset = 1
) {
	const offset_destructure_a2 = [] as I[][]
	for (let i = 0; i < offset; i++) {
		offset_destructure_a2.push([] as I[])
	}
	for (let i = 0; i < source_a1.length; i++) {
		const val = source_a1[i]
		offset_destructure_a2[i % offset].push(val)
	}
	return offset_destructure_a2
}
export {
	_offset_destructure_a2 as _a2__destructure__offset,
}
