import type { wrap_a_T2 } from '@ctx-core/function'
/**
 * Returns first item in `a` where `fn(a[idx], idx)` is truthy.
 */
export function find<In extends unknown = unknown>(
	a:wrap_a_T2<In>, fn:(val:In, idx:number)=>any
):In|undefined {
	for (let idx = 0; idx < a.length; idx++) {
		const val = a[idx] as In
		const map_val = fn(val, idx)
		if (map_val)
			return val
	}
	return undefined
}
export function maybe_find<In extends unknown = unknown>(
	maybe_a:wrap_a_T2<In>, fn:(val:In, idx:number)=>any
) {
	if (!maybe_a)
		return
	return find(maybe_a, fn)
}
/**
 * Returns function that returns value from [find](#find) with `fn` argument.
 */
export function find_fn<I extends unknown = unknown>(
	fn:(val:I, idx:number)=>I
) {
	return (a:I[])=>find(a, fn)
}
export function maybe_find_fn<I extends unknown = unknown>(
	fn:(val:I, idx:number)=>I
) {
	return (maybe_a:wrap_a_T2<I>)=>maybe_find(maybe_a, fn)
}
export {
	find_fn as _find,
	maybe_find_fn as _maybe_find,
}
