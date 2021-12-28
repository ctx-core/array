/**
 * Returns a `slice` function with the given `...arg_a` that takes a Array `a` as it's argument.
 */
export declare function slice_<I extends unknown = unknown>(begin_idx?:number, end_idx?:number):(a:I[])=>I[];
export declare function maybe_slice_<I extends unknown = unknown>(begin_idx?:number, end_idx?:number):(maybe_a:I[]|undefined)=>I[]|undefined;
export { slice_ as _slice, slice_ as _fn__slice, maybe_slice_ as _maybe_slice, }
