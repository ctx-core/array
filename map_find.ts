import type { maybe } from '@ctx-core/function'
/**
 * Returns first return value of `fn(a1[idx], idx)` where `fn(a1[idx], idx)` is truthy.
 */
export function map_find<I = unknown, O = I>(
	in_a1:maybe<I[]>,
	fn:(any, number)=>maybe<O>
): maybe<O, undefined> {
	if (!in_a1) return
	const a1 = in_a1 as I[]
	for (let idx = 0; idx < a1.length; idx++) {
		const value = a1[idx]
		const map_value = fn(value, idx)
		if (map_value) return map_value as O
	}
}
export const find__map = map_find
