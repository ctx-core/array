import type { maybe_undefined } from '@ctx-core/function'
import { zipWidth_fn_type, zipWith } from './zipWith'
/**
 * Returns a function that returns [zipWith](#zipWith) with `fn` argument.
 */
export function _zipWith</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[][]
>/*@formatter:on*/(
	fn:zipWidth_fn_type<I>
):(...a2:I[][])=>maybe_undefined<O> {
	return (...a2)=>zipWith<I>(a2, fn) as O
}
export {
	_zipWith as _fn__zipWith,
}
