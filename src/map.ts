import type { falsy } from '@ctx-core/function'
/**
 * Map return value of `fn(a1[], i)` into an Array.
 */
export function map<Val extends unknown = unknown, Out extends unknown = unknown>(
	a1:Val[],
	fn:map_fn_type<Val, Out>
):Out[] {
	const out_a1 = [] as Out[]
	for (let i = 0; i < a1.length; i++) {
		out_a1.push(fn(a1[i], i))
	}
	return out_a1
}
export function maybe_map<Val extends unknown, Out extends unknown>(
	maybe_a1:Val[]|falsy,
	fn:map_fn_type<Val, Out>
):Out[]|undefined {
	if (!maybe_a1) return
	return map<Val, Out>(maybe_a1 as Val[], fn)
}
export type map_fn_type<Val extends unknown, Out extends unknown> =
	(val:Val, idx:number)=>Out
