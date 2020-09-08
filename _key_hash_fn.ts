import { falsy } from '@ctx-core/function'
import { _key_hash } from './_key_hash'
/**
 * Returns a Function using argument `key` that returns value from [_key_hash](#_hash__key).
 */
export function _key_hash_fn(key:string|number):(a1:falsy|any[])=>any {
	return a1=>_key_hash(a1, key)
}
export const _fn__hash__key = _key_hash_fn
