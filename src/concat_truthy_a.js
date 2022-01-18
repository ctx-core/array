import { wrap_a_ } from '@ctx-core/function'
/**
 * Array#`concat`, setting falsy values to an empty Array (`[]`).
 */
export function concat_truthy_a(a_nowrap, ...rest_a) {
	let out_a = a_nowrap ? wrap_a_(a_nowrap) : []
	for (let i = 0; i < rest_a.length; i++) {
		out_a = out_a.concat(rest_a[i] || [])
	}
	return out_a
}
export {
	concat_truthy_a as concat_truthy_a1,
	concat_truthy_a as concat__default__a1,
	concat_truthy_a as concat__truthy,
}