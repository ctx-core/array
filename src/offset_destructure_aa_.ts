/**
 * Returns 2d Array where `source_a` is destructured into subarray of length `offset`.
 */
export function offset_destructure_aa_<I extends unknown = unknown>(
	source_a:I[], offset = 1
):I[][] {
	const offset_destructure_aa = [] as I[][]
	for (let i = 0; i < offset; i++) {
		offset_destructure_aa.push([] as I[])
	}
	for (let i = 0; i < source_a.length; i++) {
		const val = source_a[i]
		offset_destructure_aa[i % offset].push(val)
	}
	return offset_destructure_aa
}
export {
	offset_destructure_aa_ as offset_destructure_a2_,
	offset_destructure_aa_ as _offset_destructure_a2,
	offset_destructure_aa_ as _a2__destructure__offset,
}
