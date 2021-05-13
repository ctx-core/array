import type { falsy } from '@ctx-core/function'
import { _key_hash, _maybe_key_hash } from './_key_hash'
/**
 * Returns a Function using argument `key` that returns value from [_key_hash](#_hash__key).
 */
export function _key_hash_fn</*@formatter:off*/
	Val extends Record<string, string> = Record<string, string>,
	Key extends keyof Val = keyof Val
/*@formatter:on*/>(
	key:Key
):(a1:Val[])=>Record<string, Val> {
	return (a1)=>_key_hash<Val, Key>(a1, key)
}
export function _maybe_key_hash_fn</*@formatter:off*/
	Val extends Record<string, string> = Record<string, string>,
	Key extends keyof Val = keyof Val
/*@formatter:on*/>(
	key:Key
):(maybe_a1:Val[]|falsy)=>Record<string, Val> {
	return maybe_a1=>_maybe_key_hash<Val, Key>(maybe_a1, key)
}
export {
	_key_hash_fn as _fn__hash__key,
}
