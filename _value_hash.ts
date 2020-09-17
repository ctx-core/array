import type { maybe } from '@ctx-core/function'
/**
 * Returns a Hash with a key for each item in `value_a1` & value set to the return of `_value`.
 */
export function _value_hash<O = unknown>(
	in_value_a1:maybe<string[]>
	, _value:(string, number)=>O
) {
	const value_hash = {} as Record<string, O>
	if (in_value_a1) {
		const value_a1 = in_value_a1 as string[]
		for (let i = 0; i < value_a1.length; i++) {
			const value = value_a1[i]
			value_hash[value] = _value(value, i)
		}
	}
	return value_hash
}
export const _hash__value = _value_hash
