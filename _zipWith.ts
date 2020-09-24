import { zipWidth_fn_type, zipWith } from './zipWith'
import type { maybe_undefined } from '@ctx-core/function'
/**
 * Returns a function that returns [zipWith](#zipWith) with `fn` argument.
 */
export function _zipWith<I extends unknown = unknown>(
	fn:zipWidth_fn_type<I>
):(...a2:I[][])=>maybe_undefined<I[][]> {
	return (...a2)=>zipWith<I>(a2, fn)
}
export const _fn__zipWith = _zipWith
