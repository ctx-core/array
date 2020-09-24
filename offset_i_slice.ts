import { maybe_slice, slice } from './slice'
import type { maybe } from '@ctx-core/function'
/**
 * Returns an Array from slicing an a1 from an a1's offset from position i
 */
export function offset_i_slice<I extends unknown = unknown>(
	a1:I[],
	i:number,
	offset = 1
):I[] {
	return slice<I>(a1, i * offset, (i + 1) * offset)
}
export const slice__i__offset = offset_i_slice
export function maybe_offset_i_slice<I extends unknown = unknown>(
	maybe_a1:maybe<I[]>,
	i:number,
	offset = 1
):maybe<I[], undefined> {
	return maybe_slice<I>(maybe_a1, i * offset, (i + 1) * offset)
}
