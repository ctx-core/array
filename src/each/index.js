/** @typedef {import('./index.d.ts').each_fn_T}each_fn_T */
/**
 * Iterate over each item in `a` with `fn(a[i], i)`.
 * @param a{unknown[]}
 * @param fn{each_fn_T}
 * @returns {unknown[]}
 */
export function each(a, fn) {
	for (let i = 0; i < a.length; i++) {
		fn(a[i], i)
	}
	return a
}
/**
 * @param maybe_a{unknown[]|undefined}
 * @param fn{each_fn_T}
 * @param [or]{unknown[]|null|undefined}
 * @returns {unknown[]|null|undefined}
 */
export function maybe_each(maybe_a, fn, or = null) {
	if (!maybe_a) return or
	return each(maybe_a, fn)
}
