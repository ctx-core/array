import type { falsy } from '@ctx-core/function'
/**
 * Returns first return value of `fn(a1[idx], idx)` where `fn(a1[idx], idx)` is truthy.
 */
export function map_find<Val extends unknown = unknown, Out extends unknown = Val>(
	a1:Val[],
	fn:(val:Val, i:number)=>Out|falsy
):Out|undefined {
	for (let idx = 0; idx < a1.length; idx++) {
		const val = a1[idx]
		const map_value = fn(val, idx)
		if (map_value) return map_value as Out
	}
}
export function maybe_map_find<Val extends unknown = unknown, Out extends unknown = Val>(
	maybe_a1:Val[]|falsy,
	fn:(val:Val, i:number)=>Out|falsy
):Out|undefined {
	if (!maybe_a1) return
	return map_find<Val, Out>(maybe_a1 as Val[], fn)
}
export {
	map_find as find__map,
}
