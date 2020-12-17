import type { _item_key_idx_val_type } from './_item_key_idx_val_type';
import type { a1_item_type, maybe } from '@ctx-core/function';
/**
 * Returns a Hash where each key is `a1[idx][key]` & value is `idx`.
 */
export declare function _idx_key_hash<I extends object[]>(a1: I, key: string | number, _val?: _item_key_idx_val_type<a1_item_type<I>>): idx_key_hash_type;
export { _idx_key_hash as _hash__key__idx };
export interface idx_key_hash_type extends Record<string, number> {
}
export declare function _maybe_idx_key_hash<I extends object[]>(maybe_a1: maybe<I>, key: string | number, _val?: _item_key_idx_val_type<a1_item_type<I>>): idx_key_hash_type;
