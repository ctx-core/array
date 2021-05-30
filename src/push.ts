/**
 * Calls push on a
 */
export function push<I extends unknown = unknown>(a:I[], ...arg_a:I[]):number {
	return a.push.apply(a, arg_a)
}
export function maybe_push<I extends unknown = unknown>(
	maybe_a:I[]|undefined,
	...arg_a:I[]
):number|undefined {
	return maybe_a ? push<I>(maybe_a as I[], ...arg_a) : void 0
}
