/**
 * Removes null values from the array
 */
export function compact<I extends unknown = unknown>(a:I[]):I[] {
	const out_a = [] as I[]
	for (const val of a) {
		if (val) {
			out_a.push(val)
		}
	}
	return out_a
}
export function maybe_compact<I extends unknown = unknown>(
	maybe_a:I[]|undefined
):I[]|undefined {
	if (!maybe_a) return
	return compact<I>(maybe_a as I[])
}
export {
	compact as compact_a1,
	compact as compact__a1,
}
