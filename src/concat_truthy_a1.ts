import { _wrap_a1, a_nowrap_type, wrap_a1_type } from '@ctx-core/function'
/**
 * Array#`concat`, setting falsy values to an empty Array (`[]`).
 */
export function concat_truthy_a1<I extends unknown = unknown>(
	a1_nowrap:a_nowrap_type<I>, ...rest_a1:unknown[]
):wrap_a1_type<I> {
	let out_a1 = a1_nowrap ? _wrap_a1<I>(a1_nowrap) : [] as unknown as wrap_a1_type<I>
	for (let i = 0; i < rest_a1.length; i++) {
		out_a1 = out_a1.concat(rest_a1[i] || []) as wrap_a1_type<I>
	}
	return out_a1
}
export {
	concat_truthy_a1 as concat__default__a1,
	concat_truthy_a1 as concat__truthy,
}
