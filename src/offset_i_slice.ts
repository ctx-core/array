import { maybe_slice, slice } from './slice'
/**
 * Returns an Array from slicing an a from an a's offset from position i
 */
export function offset_i_slice<I extends unknown = unknown>(
	a:I[],
	i:number,
	offset = 1
):I[] {
	return slice<I>(a, i * offset, (i + 1) * offset)
}
export function maybe_offset_i_slice<I extends unknown = unknown>(
	maybe_a:I[]|undefined,
	i:number,
	offset = 1
):I[]|undefined {
	return maybe_slice<I>(maybe_a, i * offset, (i + 1) * offset)
}
export {
	offset_i_slice as slice__i__offset,
}
