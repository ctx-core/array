import type { maybe } from '@ctx-core/function'
/**
 * Removes null values from the array
 */
export function compact<I = unknown>(in_a1:maybe<I[]>):maybe<I[], undefined> {
	if (!in_a1) return
	const out_a1 = [] as I[]
	for (let i = (in_a1 as I[]).length; i >= 0; --i) {
		const val = (in_a1 as I[])[i]
		if (val) {
			out_a1.push(val)
		}
	}
	return out_a1
}
export const compact_a1 = compact
export const compact__a1 = compact
