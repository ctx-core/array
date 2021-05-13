import { _value_hash } from './_value_hash'
/**
 * Returns a Function that returns from [_value_hash](#_value_hash).
 */
export function _value_hash_fn<Out extends unknown = unknown>(
	_value:(key:string, idx:number)=>Out
) {
	return (value_a1:string[])=>_value_hash<Out>(value_a1, _value)
}
export {
	_value_hash_fn as _fn__hash__value,
}
