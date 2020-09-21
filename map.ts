import type { maybe } from '@ctx-core/function'
/**
 * Map return value of `fn(a1[], i)` into an Array.
 */
export function map<I extends unknown, O extends unknown>(
	a1:I[],
	fn:map_fn_type<I, O>
):O[] {
	const out_a1 = [] as O[]
	for (let i = 0; i < a1.length; i++) {
		out_a1.push(fn(a1[i], i))
	}
	return out_a1
}
export function maybe_map<I extends unknown, O extends unknown>(
	maybe_a1:maybe<I[]>,
	fn:map_fn_type<I, O>
):maybe<O[], undefined> {
	if (!maybe_a1) return
	return map<I, O>(maybe_a1 as I[], fn)
}
export type map_fn_type<I extends unknown, O extends unknown> =
	(val:I, idx:number)=>O
