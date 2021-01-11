import type { a1_item_type, maybe } from '@ctx-core/function'
import type { _item_key_idx_val_type } from './_item_key_idx_val_type'
import { _idx_key_hash, _maybe_idx_key_hash, idx_key_hash_type } from './_idx_key_hash'
/**
 * Returns function that returns from [_idx_key_hash](#_idx_key_hash) with `_val` function argument.
 */
export function _idx_key_hash_fn<I extends object[] = object[]>(
	_val: _item_key_idx_val_type<a1_item_type<I>>
): (a1: I, key: string) => idx_key_hash_type {
	return (a1, key) => _idx_key_hash<I>(a1, key, _val)
}
export function _maybe_idx_key_hash_fn<I extends object[] = object[]>(
	_val: _item_key_idx_val_type<I>
): (maybe_a1: maybe<I[]>, key: string) => idx_key_hash_type {
	return (
		maybe_a1, key
	) => _maybe_idx_key_hash(maybe_a1, key, _val)
}
export {
	_idx_key_hash_fn as _fn__idx_key_hash,
}
