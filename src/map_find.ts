import type { wrap_a_type } from '@ctx-core/function'
/**
 * Returns first return value of `fn(a1[idx], idx)` where `fn(a1[idx], idx)` is truthy.
 */
export function map_find<In extends unknown = unknown, Out extends unknown = In>(
	a1:wrap_a_type<In>, fn:(val:In, idx:number)=>Out
) {
	for (let idx = 0; idx < a1.length; idx++) {
		const val = a1[idx] as In
		const map_value = fn(val, idx)
		if (map_value)
			return map_value
	}
	return
}
export function maybe_map_find<In extends unknown = unknown, Out extends unknown = In>(
	maybe_a1:wrap_a_type<In>, fn:(val:In, idx:number)=>Out
) {
	if (!maybe_a1)
		return
	return map_find(maybe_a1, fn)
}
export { map_find as find__map, }
