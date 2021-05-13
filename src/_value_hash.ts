import type { falsy } from '@ctx-core/function'
/**
 * Returns a Hash with a key for each item in `value_a1` & value set to the return of `_value`.
 */
export function _value_hash<Out extends unknown = unknown>(
	in_value_a1:string[]|falsy, _value:(value:string, i:number)=>Out
) {
	const value_hash = {} as Record<string, Out>
	if (in_value_a1) {
		const value_a1 = in_value_a1 as string[]
		for (let i = 0; i < value_a1.length; i++) {
			const value = value_a1[i]
			value_hash[value] = _value(value, i)
		}
	}
	return value_hash
}
export {
	_value_hash as _hash__value,
}
