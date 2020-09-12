import type { falsy } from '@ctx-core/function'
import type { _item_key_idx_val_type } from './_item_key_idx_val_type'
import { _idx_key_hash } from './_idx_key_hash'
/**
 * Returns function that returns from [_idx_key_hash](#_idx_key_hash) with `_val` function argument.
 */
export function _idx_key_hash_fn(_val:_item_key_idx_val_type):(a1:falsy|any[], key:string)=>any {
	return (a1, key)=>_idx_key_hash(a1, key, _val)
}
export const _fn__idx_key_hash = _idx_key_hash_fn
