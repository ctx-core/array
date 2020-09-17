import type { maybe } from '@ctx-core/function'
/**
 * Iterate over each item in `a1` with `fn(a1[i], i)`.
 */
export function each<I = unknown>(in_a1:maybe<I[]>, fn:(I, number)=>void):maybe<I[], undefined> {
	if (!in_a1) return
	const a1 = in_a1 as I[]
	for (let i = 0; i < a1.length; i++) {
		fn(a1[i], i)
	}
	return a1
}
