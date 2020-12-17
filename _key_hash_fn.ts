import type { maybe } from '@ctx-core/function'
import { _key_hash, _maybe_key_hash } from './_key_hash'
/**
 * Returns a Function using argument `key` that returns value from [_key_hash](#_hash__key).
 */
export function _key_hash_fn<I extends object[]>(
	key:string|number
):(a1:I)=>Record<string, I[number]> {
	return (a1)=>_key_hash<I>(a1, key)
}
export function _maybe_key_hash_fn<I extends object[]>(
	key:string|number
):(maybe_a1:maybe<I>)=>Record<string, I[number]> {
	return maybe_a1=>_maybe_key_hash<I>(maybe_a1, key)
}
export {
	_key_hash_fn as _fn__hash__key,
}
