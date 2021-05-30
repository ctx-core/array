import { maybe_slice, slice } from './slice'
/**
 * Returns a `slice` function with the given `...arg_a` that takes a Array `a` as it's argument.
 */
export function slice_<I extends unknown = unknown>(
	begin_idx?:number,
	end_idx?:number
):(a:I[])=>I[] {
	return a=>slice<I>(a, begin_idx, end_idx)
}
export function maybe_slice_<I extends unknown = unknown>(
	begin_idx?:number,
	end_idx?:number
):(maybe_a:I[]|undefined)=>I[]|undefined {
	return (maybe_a:I[]|undefined)=>maybe_slice<I>(maybe_a, begin_idx, end_idx)
}
export {
	slice_ as _slice,
	slice_ as _fn__slice,
	maybe_slice_ as _maybe_slice,
}
