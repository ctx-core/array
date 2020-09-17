import type { maybe } from '@ctx-core/function'
import { slice } from './slice'
/**
 * Returns a `slice` function with the given `...arg_a1` that takes a Array `a1` as it's argument.
 */
export function _slice<I = unknown>(
	begin_idx?:number,
	end_idx?:number
):(a1:maybe<I[]>)=>maybe<I[], undefined> {
	return a1=>slice<I>(a1, begin_idx, end_idx)
}
export const _fn__slice = _slice
