import type { falsy } from '@ctx-core/function'
/**
 * Removes null values from the array
 */
export function compact(in_a1:falsy|any[]):undefined|any[] {
	if (!in_a1) return
	const out_a1 = []
	for (let i = in_a1.length; i >= 0; --i) {
		const val = in_a1[i]
		if (val) {
			out_a1.push(val)
		}
	}
	return out_a1
}
export const compact_a1 = compact
export const compact__a1 = compact
