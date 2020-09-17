import type { maybe } from '@ctx-core/function'
/**
 * Returns reduced `memo` iterating over `a1` with `fn(memo, a1[], i, a1)`.
 */
export function reduce<I = unknown, O = unknown>(
	in_a1:maybe<I[]>,
	fn:reduce_fn_type<I, O>,
	memo:O
):maybe<O, undefined> {
	if (!in_a1) return
	const a1 = in_a1 as I[]
	for (let i = 0; i < a1.length; i++) {
		const o = a1[i]
		memo = fn(memo, o, i, a1)
	}
	return memo
}
export type reduce_fn_type<I = unknown, O = unknown> = (memo:O, item:I, idx:number, a1:I[])=>O
