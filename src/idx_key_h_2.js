import { idx_key_h_, maybe_idx_key_h_ } from './idx_key_h_';
import { I__ } from '@ctx-core/combinators';
/**
 * Returns function that returns from [_idx_key_hash](#_idx_key_hash) with `item_key_idx_val_` function argument.
 */
export function idx_key_h_2(item_key_idx_val_ = I__) {
    return (a, key) => idx_key_h_(a, key, item_key_idx_val_);
}
export function maybe_idx_key_h_2(item_key_idx_val_ = I__) {
    return (maybe_a, key) => maybe_idx_key_h_(maybe_a, key, item_key_idx_val_);
}
export { idx_key_h_2 as _idx_key_hash_fn, idx_key_h_2 as _fn__idx_key_hash, maybe_idx_key_h_2 as _maybe_idx_key_hash_fn, };
//# sourceMappingURL=src/idx_key_h_2.js.map