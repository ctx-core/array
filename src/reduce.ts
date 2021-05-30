/**
 * Returns reduced `memo` iterating over `a` with `fn(memo, a[], i, a)`.
 */
export function reduce<I extends unknown = unknown, O extends unknown = unknown>(
	a:I[], fn:reduce_fn_T<I, O>, memo:O
):O {
	for (let i = 0; i < a.length; i++) {
		const o = a[i]
		memo = fn(memo, o, i, a)
	}
	return memo
}
export type reduce_fn_T<I extends unknown = unknown, O extends unknown = unknown> = (
	memo:O, item:I, idx:number, a:I[]
)=>O
export function maybe_reduce<I extends unknown = unknown, O extends unknown = unknown>(
	maybe_a:I[]|undefined,
	fn:reduce_fn_T<I, O>,
	memo:O
):O|undefined {
	if (!maybe_a) return
	return maybe_reduce<I, O>(maybe_a as I[], fn, memo)
}
