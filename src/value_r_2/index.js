import { value_r_ } from '../value_r_/index.js'
/**
 * Returns a Function that returns from [_value_hash](#_value_hash).
 * @param value_{(key:string, idx:number)=>unknown}
 * @returns {(value_a:string[])=>Record<string, unknown>}
 */
export function value_r_2(value_) {
	return value_a=>value_r_(value_a, value_)
}
export {
	value_r_2 as value_h_2,
	value_r_2 as value_hash_fn2,
	value_r_2 as _value_hash_fn,
	value_r_2 as _fn__hash__value,
}
