import type { maybe, maybe_undefined } from '@ctx-core/function'
import { maybe_slice, slice } from './slice'
/**
 * Returns a `slice` function with the given `...arg_a1` that takes a Array `a1` as it's argument.
 */
export function _slice<I extends unknown[]>(
	begin_idx?:number,
	end_idx?:number
):(a1:I)=>I {
	return a1=>slice<I>(a1, begin_idx, end_idx)
}
export const _fn__slice = _slice
export function _maybe_slice<I extends unknown[]>(
	begin_idx?:number,
	end_idx?:number
):(a1:maybe<I>)=>maybe_undefined<I> {
	return a1=>maybe_slice<I>(a1, begin_idx, end_idx)
}
