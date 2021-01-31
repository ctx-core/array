import type { maybe } from '@ctx-core/function'
/**
 * Calls push on a1
 */
export function push<I extends unknown = unknown>(a1:I[], ...arg_a1:I[]):number {
	return a1.push.apply(a1, arg_a1)
}
export function maybe_push<I extends unknown = unknown>(
	maybe_a1:maybe<I[]>,
	...arg_a1:I[]
):maybe<number, undefined> {
	return maybe_a1 ? push<I>(maybe_a1 as I[], ...arg_a1) : void 0
}
