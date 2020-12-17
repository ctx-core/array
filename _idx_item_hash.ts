import { I__ } from '@ctx-core/combinators'
import { _idx_item_hash_fn, idx_item_hash_fn_type } from './_idx_item_hash_fn'
/**
 * Returns an Object where each key is `_item(a1[idx], idx)` and value is `idx`.
 */
export const _idx_item_hash: idx_item_hash_fn_type = _idx_item_hash_fn(I__)
export {
	_idx_item_hash as _hash__item__idx,
}
