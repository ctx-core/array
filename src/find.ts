import type { wrap_a_type } from '@ctx-core/function'
/**
 * Returns first item in `a1` where `fn(a1[idx], idx)` is truthy.
 */
export function find<In extends unknown = unknown>(
	a1:wrap_a_type<In>, fn:(val:In, idx:number)=>any
) {
	for (let idx = 0; idx < a1.length; idx++) {
		const val = a1[idx] as In
		const map_val = fn(val, idx)
		if (map_val)
			return val
	}
	return undefined
}
export function maybe_find<In extends unknown = unknown>(
	maybe_a1:wrap_a_type<In>, fn:(val:In, idx:number)=>any
) {
	if (!maybe_a1)
		return
	return find(maybe_a1, fn)
}
