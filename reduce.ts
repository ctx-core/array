import type { maybe, maybe_undefined } from '@ctx-core/function'
/**
 * Returns reduced `memo` iterating over `a1` with `fn(memo, a1[], i, a1)`.
 */
export function reduce<I, O = unknown>(
	a1:I[], fn:reduce_fn_type<I, O>, memo:O
):O {
	for (let i = 0; i < a1.length; i++) {
		const o = a1[i]
		memo = fn(memo, o, i, a1)
	}
	return memo
}
export type reduce_fn_type<I, O = unknown> = (
	memo:O, item:I, idx:number, a1:I[]
)=>O
export function maybe_reduce<I, O = unknown>(
	maybe_a1:maybe<I[]>,
	fn:reduce_fn_type<I, O>,
	memo:O
):maybe_undefined<O> {
	if (!maybe_a1) return
	return maybe_reduce<I, O>(maybe_a1 as I[], fn, memo)
}
