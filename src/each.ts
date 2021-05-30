/**
 * Iterate over each item in `a` with `fn(a[i], i)`.
 */
export function each<I extends unknown = unknown>(
	a:I[],
	fn:each_fn_T<I>
):I[] {
	for (let i = 0; i < a.length; i++) {
		fn(a[i], i)
	}
	return a
}
export function maybe_each<I extends unknown = unknown>(
	maybe_a:I[]|undefined,
	fn:each_fn_T<I>
):I[]|undefined {
	if (!maybe_a) return
	return each<I>(maybe_a as I[], fn)
}
export type each_fn_T<I> = (val:I, idx:number)=>void
