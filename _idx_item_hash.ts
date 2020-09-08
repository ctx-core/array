import { I__ } from '@ctx-core/combinators'
import { _idx_item_hash_fn } from './_idx_item_hash_fn'
/**
 * Returns an Object where each key is `_item(a1[idx], idx)` and value is `idx`.
 */
export const _hash__item__idx = _idx_item_hash_fn(I__)
