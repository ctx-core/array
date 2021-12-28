import type { wrap_a_T2 } from '@ctx-core/function'
/**
 * Returns first item in `a` where `fn(a[idx], idx)` is truthy.
 */
export declare function find<In extends unknown = unknown>(a:wrap_a_T2<In>, fn:(val:In, idx:number)=>any):In|undefined;
export declare function maybe_find<In extends unknown = unknown>(maybe_a:wrap_a_T2<In>, fn:(val:In, idx:number)=>any):In|undefined;
/**
 * Returns function that returns value from [find](#find) with `fn` argument.
 */
export declare function find_fn<I extends unknown = unknown>(fn:(val:I, idx:number)=>I):(a:I[])=>I|undefined;
export declare function maybe_find_fn<I extends unknown = unknown>(fn:(val:I, idx:number)=>I):(maybe_a:wrap_a_T2<I>)=>I|undefined;
export { find_fn as _find, maybe_find_fn as _maybe_find, }
