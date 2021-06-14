import { I__ } from '@ctx-core/combinators';
/**
 * Returns a Hash where each key is `a[idx][key]` & value is `idx`.
 */
export function idx_key_h_(a, key, item_key_idx_val_ = I__) {
    let idx_key_h = {};
    if (a) {
        for (let idx = 0; idx < a.length; idx++) {
            const obj = a[idx];
            const val = item_key_idx_val_ ? item_key_idx_val_(obj && obj[key], obj, key, idx) : (obj && obj[key]);
            if (!val)
                continue;
            idx_key_h[val] = idx;
        }
    }
    return idx_key_h;
}
export function maybe_idx_key_h_(maybe_a, key, item_key_idx_val_ = I__) {
    return idx_key_h_(maybe_a, key, item_key_idx_val_);
}
export { idx_key_h_ as _idx_key_hash, idx_key_h_ as _hash__key__idx, maybe_idx_key_h_ as _maybe_idx_key_hash, };
//# sourceMappingURL=src/idx_key_h_.js.map