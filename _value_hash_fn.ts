import { _value_hash } from './_value_hash'
/**
 * Returns a Function that returns from [_value_hash](#_value_hash).
 */
export function _value_hash_fn(_value:(value: unknown, number)=>any) {
	return value_a1=>_value_hash(value_a1, _value)
}
export const _fn__hash__value = _value_hash_fn
