import type { item_key_idx_val_fn_T } from './item_key_idx_val_fn_T';
/**
 * Returns a Hash where each key is `a[idx][key]` & value is `idx`.
 */
export declare function idx_key_h_<Obj extends Record<string, string> = Record<string, string>>(a: Obj[], key: string | number, item_key_idx_val_?: item_key_idx_val_fn_T<string, Obj>): idx_key_h_T;
export interface idx_key_h_T extends Record<string, number> {
}
export declare function maybe_idx_key_h_<Obj extends Record<string, string> = Record<string, string>>(maybe_a: Obj[] | undefined, key: string | number, item_key_idx_val_?: item_key_idx_val_fn_T<string, Obj>): idx_key_h_T;
export { idx_key_h_ as _idx_key_hash, idx_key_h_ as _hash__key__idx, maybe_idx_key_h_ as _maybe_idx_key_hash, };
