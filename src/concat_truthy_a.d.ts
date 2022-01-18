import { a_nowrap_T, wrap_a_T } from '@ctx-core/function'
/**
 * Array#`concat`, setting falsy values to an empty Array (`[]`).
 */
export declare function concat_truthy_a<I extends unknown = unknown>(
	a_nowrap:a_nowrap_T<I>, ...rest_a:readonly unknown[]
):wrap_a_T<I>;
export {
	concat_truthy_a as concat_truthy_a1,
	concat_truthy_a as concat__default__a1,
	concat_truthy_a as concat__truthy,
}
