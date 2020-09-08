import { _wrap_a1 } from '@ctx-core/function'
/**
 * Array#`concat`, setting falsy values to an empty Array (`[]`).
 */
export function concat_truthy_a1(in_a1:any|any[], ...rest_a1:any[]):any[] {
	let out_a1 = in_a1 ? _wrap_a1(in_a1) : []
	for (let i = 0; i < rest_a1.length; i++) {
		out_a1 = out_a1.concat(rest_a1[i] || [])
	}
	return out_a1
}
export const concat__default__a1 = concat_truthy_a1
export const concat__truthy = concat_truthy_a1
