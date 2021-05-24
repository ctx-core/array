import type { wrap_a_type } from '@ctx-core/function'
import { find, maybe_find } from './find'
/**
 * Returns function that returns value from [find](#find) with `fn` argument.
 */
export function _find<I extends unknown = unknown>(
	fn:(val:I, idx:number)=>I
) {
	return (a1:I[])=>find(a1, fn)
}
export function _maybe_find<I extends unknown = unknown>(
	fn:(val:I, idx:number)=>I
) {
	return (maybe_a1:wrap_a_type<I>)=>maybe_find(maybe_a1, fn)
}
