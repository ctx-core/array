import type { falsy } from '@ctx-core/function'
import { _value_hash } from './_value_hash'
/**
 * Returns a Function that returns from [_value_hash](#_value_hash).
 */
export function _value_hash_fn(_value:(any, number)=>any):(a1:falsy|any[])=>any {
	return a1__value=>_value_hash(a1__value, _value)
}
export const _fn__hash__value = _value_hash_fn
