import type { falsy } from '@ctx-core/function';
import type { _item_key_idx_val_type } from './_item_key_idx_val_type';
/**
 * Returns a Hash where each key is `a1[idx][key]` & value is `idx`.
 */
export declare function _idx_key_hash<Obj extends Record<string, string> = Record<string, string>>(a1: Obj[], key: string | number, _val?: _item_key_idx_val_type<string, Obj>): idx_key_hash_type;
export interface idx_key_hash_type extends Record<string, number> {
}
export declare function _maybe_idx_key_hash<Obj extends Record<string, string> = Record<string, string>>(maybe_a1: Obj[] | falsy, key: string | number, _val?: _item_key_idx_val_type<string, Obj>): idx_key_hash_type;
export { _idx_key_hash as _hash__key__idx };
