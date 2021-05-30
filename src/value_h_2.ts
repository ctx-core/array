import { value_h_ } from './value_h_'
/**
 * Returns a Function that returns from [_value_hash](#_value_hash).
 */
export function value_h_2<Out extends unknown = unknown>(
	_value:(key:string, idx:number)=>Out
) {
	return (value_a:string[])=>value_h_<Out>(value_a, _value)
}
export {
	value_h_2 as value_hash_fn2,
	value_h_2 as _value_hash_fn,
	value_h_2 as _fn__hash__value,
}
