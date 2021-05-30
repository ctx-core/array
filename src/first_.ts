/**
 * Returns the first item in `a`.
 */
export function first_<I extends unknown = unknown>(a:I[]):I|undefined {
	return a[0] as I|undefined
}
export function maybe_first_<I extends unknown = unknown>(
	maybe_a:I[]|undefined
):I|undefined {
	return maybe_a ? first_(maybe_a as I[]) : void 0
}
export {
	first_ as _first,
	maybe_first_ as _maybe_first,
}
