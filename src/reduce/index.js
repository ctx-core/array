/**
 * Returns reduced `memo` iterating over `a` with `fn(memo, a[], i, a)`.
 */
export function reduce(a, fn, memo) {
	for (let i = 0; i < a.length; i++) {
		const o = a[i]
		memo = fn(memo, o, i, a)
	}
	return memo
}
export function maybe_reduce(
	maybe_a, fn, memo, or = null
) {
	if (!maybe_a) return or
	return reduce(maybe_a, fn, memo)
}
