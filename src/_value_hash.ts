import type { falsy } from '@ctx-core/function'
/**
 * Returns a Hash with a key for each item in `value_a1` & value set to the return of `_value`.
 */
export function _value_hash<Out extends unknown = unknown>(
	in_key_a1:string[]|falsy, _value:(key:string, i:number)=>Out
) {
	const value_h = {} as Record<string, Out>
	if (in_key_a1) {
		const key_a1 = in_key_a1 as string[]
		for (let i = 0; i < key_a1.length; i++) {
			const key = key_a1[i]
			value_h[key] = _value(key, i)
		}
	}
	return value_h
}
export {
	_value_hash as _hash__value,
}
