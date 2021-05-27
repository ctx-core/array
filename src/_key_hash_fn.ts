import { _key_hash, _maybe_key_hash } from './_key_hash'
/**
 * Returns a Function using argument `key` that returns value from [_key_hash](#_hash__key).
 */
export function _key_hash_fn</*@formatter:off*/
	Key extends string,
	Obj extends { [k in Key]:string }
/*@formatter:on*/>(
	key:Key
):(a1:Obj[])=>Record<string, Obj> {
	return a1=>_key_hash<Key, Obj>(a1, key)
}
export function _maybe_key_hash_fn</*@formatter:off*/
	Key extends string,
	Obj extends { [k in Key]:string }
/*@formatter:on*/>(
	key:Key
):(maybe_a1:Obj[]|undefined)=>Record<string, Obj> {
	return maybe_a1=>_maybe_key_hash<Key, Obj>(maybe_a1 as Obj[], key)
}
export {
	_key_hash_fn as _fn__hash__key,
}
