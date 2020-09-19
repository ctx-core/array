import type { maybe, maybe_undefined } from '@ctx-core/function'
/**
 * Calls slice on a1
 */
export function slice<I extends unknown[]>(a1:I, begin_idx?:number, end_idx?:number) {
	return a1.slice(begin_idx, end_idx) as I
}
export function maybe_slice<I extends unknown[]>(
	in_a1:maybe<I>,
	begin_idx?:number,
	end_idx?:number
):maybe_undefined<I> {
	return in_a1 ? slice<I>(in_a1 as I, begin_idx, end_idx) : undefined
}
