/** @typedef {import('./index.d.ts').reduce_fn_T}reduce_fn_T */
/**
 * Returns reduced `memo` iterating over `a` with `fn(memo, a[], i, a)`.
 * @param a{unknown[]}
 * @param fn{reduce_fn_T}
 * @param memo{unknown}
 * @returns {unknown}
 */
export function reduce(a, fn, memo) {
	for (let i = 0; i < a.length; i++) {
		const o = a[i]
		memo = fn(memo, o, i, a)
	}
	return memo
}
/**
 * @param maybe_a{unknown[]|undefined}
 * @param fn{reduce_fn_T}
 * @param memo{unknown}
 * @param or{unknown}
 * @returns {unknown}
 */
export function maybe_reduce(
	maybe_a, fn, memo, or = null
) {
	if (!maybe_a) return or
	return reduce(maybe_a, fn, memo)
}
