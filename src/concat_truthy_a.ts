import { wrap_a_, a_nowrap_T, wrap_a_T } from '@ctx-core/function'
/**
 * Array#`concat`, setting falsy values to an empty Array (`[]`).
 */
export function concat_truthy_a<I extends unknown = unknown>(
	a_nowrap:a_nowrap_T<I>, ...rest_a:unknown[]
):wrap_a_T<I> {
	let out_a = a_nowrap ? wrap_a_<I>(a_nowrap) : [] as unknown as wrap_a_T<I>
	for (let i = 0; i < rest_a.length; i++) {
		out_a = out_a.concat(rest_a[i] || []) as wrap_a_T<I>
	}
	return out_a
}
export {
	concat_truthy_a as concat_truthy_a1,
	concat_truthy_a as concat__default__a1,
	concat_truthy_a as concat__truthy,
}
