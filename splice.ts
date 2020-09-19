import type { maybe, maybe_undefined } from '@ctx-core/function'
/**
 * Calls splice on a1
 */
export function splice<I>(
	a1:I[],
	start:number,
	delete_count?:number,
	...arg_a1:I[]
):maybe<I[], undefined> {
	return a1.splice(start, delete_count as number, ...arg_a1)
}
export function maybe_splice<I>(
	maybe_a1:maybe<I[]>,
	start:number,
	delete_count?:number,
	...arg_a1:I[]
):maybe_undefined<I[]> {
	return maybe_a1 ? splice<I>(maybe_a1 as I[], start, delete_count, ...arg_a1) : undefined
}
