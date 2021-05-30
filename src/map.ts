/**
 * Map return value of `fn(a[], i)` into an Array.
 */
export function map<Val extends unknown = unknown, Out extends unknown = unknown>(
	a:Val[],
	fn:map_fn_T<Val, Out>
):Out[] {
	const out_a = [] as Out[]
	for (let i = 0; i < a.length; i++) {
		out_a.push(fn(a[i], i))
	}
	return out_a
}
export function maybe_map<Val extends unknown, Out extends unknown>(
	maybe_a:Val[]|undefined,
	fn:map_fn_T<Val, Out>
):Out[]|undefined {
	if (!maybe_a) return
	return map<Val, Out>(maybe_a as Val[], fn)
}
export type map_fn_T<Val extends unknown, Out extends unknown> =
	(val:Val, idx:number)=>Out
