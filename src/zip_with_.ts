import { zip_width_fn_T, zip_with } from './zip_with'
/**
 * Returns a function that returns [zipWith](#zipWith) with `fn` argument.
 */
export function zip_with_</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[][]
>/*@formatter:on*/(
	fn:zip_width_fn_T<I>
):(...a2:I[][])=>O|undefined {
	return (...a2)=>zip_with<I>(a2, fn) as O
}
export {
	zip_with_ as _zip_with,
	zip_with_ as _zipWith,
	zip_with_ as _fn__zipWith,
}
