import { I__ } from '@ctx-core/combinators'
import { item_r_idx_2 } from '../item_r_idx_2/index.js'
/**
 * Returns an Object where each key is `_item(a[idx], idx)` and value is `idx`.
 */
export const item_r_idx_ = item_r_idx_2(I__)
export {
	item_r_idx_ as idx_item_r_,
	item_r_idx_ as idx_item_h_,
	item_r_idx_ as idx_item_hash_,
	item_r_idx_ as _idx_item_hash,
	item_r_idx_ as _hash__item__idx,
}
