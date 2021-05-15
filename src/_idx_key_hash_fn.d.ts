import type { falsy } from '@ctx-core/function';
import type { _item_key_idx_val_type } from './_item_key_idx_val_type';
import { idx_key_hash_type } from './_idx_key_hash';
/**
 * Returns function that returns from [_idx_key_hash](#_idx_key_hash) with `_val` function argument.
 */
export declare function _idx_key_hash_fn<Obj extends Record<string, string> = Record<string, string>>(_val?: _item_key_idx_val_type<string, Obj>): (a1: Obj[], key: string | number) => idx_key_hash_type;
export declare function _maybe_idx_key_hash_fn<Obj extends Record<string, string> = Record<string, string>>(_val?: _item_key_idx_val_type<string, Obj>): (maybe_a1: Obj[] | falsy, key: string) => idx_key_hash_type;
export { _idx_key_hash_fn as _fn__idx_key_hash, };
