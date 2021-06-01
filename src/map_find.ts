import type { wrap_a_T2 } from '@ctx-core/function'
/**
 * Returns first return value of `fn(a[idx], idx)` where `fn(a[idx], idx)` is truthy.
 */
export function map_find<In extends unknown = unknown, Out extends unknown = In>(
	a:wrap_a_T2<In>, fn:(val:In, idx:number)=>Out
):Out|undefined {
	for (let idx = 0; idx < a.length; idx++) {
		const val = a[idx] as In
		const map_value = fn(val, idx)
		if (map_value)
			return map_value
	}
	return
}
export function maybe_map_find<In extends unknown = unknown, Out extends unknown = In>(
	maybe_a:wrap_a_T2<In>, fn:(val:In, idx:number)=>Out
):Out|undefined {
	if (!maybe_a)
		return
	return map_find(maybe_a, fn)
}
export { map_find as find__map, }
