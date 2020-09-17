import type { maybe } from '@ctx-core/function'
/**
 * Map return value of `fn(a1[], i)` into an Array.
 */
export function map<I = unknown, O = unknown>(
	in_a1:maybe<I[]>,
	fn:(val:I, idx:number)=>O
):maybe<O[], undefined> {
	if (!in_a1) return
	const a1 = in_a1 as I[]
	const out_a1 = [] as O[]
	for (let i = 0; i < a1.length; i++) {
		out_a1.push(fn(a1[i], i))
	}
	return out_a1
}
