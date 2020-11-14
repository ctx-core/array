import type { maybe, maybe_undefined } from '@ctx-core/function'
/**
 * Removes null values from the array
 */
export function compact<I extends unknown = unknown>(a1:I[]):I[] {
	const out_a1 = [] as I[]
	for (const val of a1) {
		if (val) {
			out_a1.push(val)
		}
	}
	return out_a1
}
export const compact_a1 = compact
export const compact__a1 = compact
export function maybe_compact<I extends unknown = unknown>(maybe_a1:maybe<I[]>):maybe_undefined<I[]> {
	if (!maybe_a1) return
	return compact<I>(maybe_a1 as I[])
}
