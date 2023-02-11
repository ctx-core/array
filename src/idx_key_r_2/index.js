import { I__ } from '@ctx-core/combinators'
import { idx_key_r_, maybe_idx_key_r_ } from '../idx_key_r_/index.js'
/**
 * Returns function that returns from [_idx_key_hash](#_idx_key_hash) with `item_key_idx_val_` function argument.
 */
export function idx_key_r_2(item_key_idx_val_ = I__) {
	return (a, key)=>idx_key_r_(a, key, item_key_idx_val_)
}
export function maybe_idx_key_r_2(
	item_key_idx_val_ = I__,
	or = null
) {
	return (maybe_a, key)=>maybe_idx_key_r_(maybe_a, key, item_key_idx_val_, or)
}
export {
	idx_key_r_2 as idx_key_h_2,
	idx_key_r_2 as _idx_key_hash_fn,
	idx_key_r_2 as _fn__idx_key_hash,
	maybe_idx_key_r_2 as _maybe_idx_key_hash_fn,
	maybe_idx_key_r_2 as maybe_idx_key_h_2,
}
