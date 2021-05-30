/**
 * Returns the _last item in the in_a
 */
export function last_<I extends unknown = unknown>(a:I[]):I|undefined {
	return a[a.length - 1] as I
}
export function maybe_last_<I extends unknown = unknown>(
	maybe_a:I[]|undefined
):I|undefined {
	if (!maybe_a) return
	return last_(maybe_a as I[])
}
export {
	last_ as _last,
	last_ as _last__a1,
	maybe_last_ as _maybe_last,
}
