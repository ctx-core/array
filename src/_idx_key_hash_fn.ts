import type { falsy } from '@ctx-core/function'
import type { _item_key_idx_val_T } from './_item_key_idx_val_T'
import { _idx_key_hash, _maybe_idx_key_hash, idx_key_hash_type } from './_idx_key_hash'
import { I__ } from '@ctx-core/combinators'
/**
 * Returns function that returns from [_idx_key_hash](#_idx_key_hash) with `_val` function argument.
 */
export function _idx_key_hash_fn<Obj extends Record<string, string> = Record<string, string>>(
	_val:_item_key_idx_val_T<string, Obj> = I__ as _item_key_idx_val_T<string, Obj>
):(a1:Obj[], key:string|number)=>idx_key_hash_type {
	return (a1, key)=>_idx_key_hash<Obj>(a1, key, _val)
}
export function _maybe_idx_key_hash_fn<Obj extends Record<string, string> = Record<string, string>>(
	_val:_item_key_idx_val_T<string, Obj> = I__ as _item_key_idx_val_T<string, Obj>
):(maybe_a1:Obj[]|falsy, key:string)=>idx_key_hash_type {
	return (
		maybe_a1, key
	)=>_maybe_idx_key_hash(maybe_a1, key, _val)
}
export {
	_idx_key_hash_fn as _fn__idx_key_hash,
}
