import type { maybe } from '@ctx-core/function'
/**
 * Returns first return value of `fn(a1[idx], idx)` where `fn(a1[idx], idx)` is truthy.
 */
export function map_find<I extends unknown = unknown, O extends unknown = I>(
	a1:I[],
	fn:(val:I, number)=>maybe<O>
):O|undefined {
	for (let idx = 0; idx < a1.length; idx++) {
		const val = a1[idx]
		const map_value = fn(val, idx)
		if (map_value) return map_value as O
	}
}
export function maybe_map_find<I extends unknown = unknown, O extends unknown = I>(
	maybe_a1:maybe<I[]>,
	fn:(I, number)=>maybe<O>
):maybe<O, undefined> {
	if (!maybe_a1) return
	return map_find<I, O>(maybe_a1 as I[], fn)
}
export {
	map_find as find__map,
}
