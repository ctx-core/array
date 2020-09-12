import type { falsy } from '@ctx-core/function'
/**
 * Returns a Hash with a key for each item in `value_a1` & value set to the return of `_value`.
 */
export function _value_hash(value_a1:falsy|any[], _value:(any, number)=>any):any {
	const value_hash = {}
	if (value_a1) {
		for (let i = 0; i < value_a1.length; i++) {
			const value = value_a1[i]
			value_hash[value] = _value(value, i)
		}
	}
	return value_hash
}
export const _hash__value = _value_hash
