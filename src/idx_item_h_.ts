import { I__ } from '@ctx-core/combinators'
import { idx_item_h_2, idx_item_h_fn_T } from './idx_item_h_2'
/**
 * Returns an Object where each key is `_item(a[idx], idx)` and value is `idx`.
 */
export const idx_item_h_:idx_item_h_fn_T = idx_item_h_2(I__)
export {
	idx_item_h_ as idx_item_hash_,
	idx_item_h_ as _idx_item_hash,
	idx_item_h_ as _hash__item__idx,
}