import { value_r_ } from './value_r_'
/**
 * Returns a Function that returns from [_value_hash](#_value_hash).
 */
export function value_r_2<Out extends unknown = unknown>(
	value_:(key:string, idx:number)=>Out
):(value_a:string[])=>Record<string, Out> {
	return (value_a:string[])=>value_r_<Out>(value_a, value_)
}
export {
	value_r_2 as value_h_2,
	value_r_2 as value_hash_fn2,
	value_r_2 as _value_hash_fn,
	value_r_2 as _fn__hash__value,
}
