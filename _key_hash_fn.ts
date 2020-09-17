import { _key_hash } from './_key_hash'
import type { maybe } from '@ctx-core/function'
/**
 * Returns a Function using argument `key` that returns value from [_key_hash](#_hash__key).
 */
export function _key_hash_fn<I = unknown>(key:string|number):(a1:maybe<I[]>)=>Record<string, I> {
	return a1=>_key_hash<I>(a1, key)
}
export const _fn__hash__key = _key_hash_fn
