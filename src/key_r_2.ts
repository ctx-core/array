import { key_r_, maybe_key_r_ } from './key_r_'
/**
 * Returns a Function using argument `key` that returns value from [_key_hash](#_hash__key).
 */
export function key_r_2</*@formatter:off*/
	Key extends string,
	Obj extends { [k in Key]:string }
/*@formatter:on*/>(
	key:Key
):(a:Obj[])=>Record<string, Obj> {
	return a=>key_r_<Key, Obj>(a, key)
}
export function maybe_key_r_2</*@formatter:off*/
	Key extends string,
	Obj extends { [k in Key]:string }
/*@formatter:on*/>(
	key:Key
):(maybe_a:Obj[]|undefined)=>Record<string, Obj> {
	return maybe_a=>maybe_key_r_<Key, Obj>(maybe_a as Obj[], key)
}
export {
	key_r_2 as key_h_2,
	key_r_2 as _key_hash_fn,
	key_r_2 as _fn__hash__key,
	maybe_key_r_2 as maybe_key_h_2,
	maybe_key_r_2 as _maybe_key_hash_fn,
}
