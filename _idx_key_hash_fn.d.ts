import type { _item_key_idx_val_type } from './_item_key_idx_val_type';
import { idx_key_hash_type } from './_idx_key_hash';
import type { a1_item_type, maybe } from '@ctx-core/function';
/**
 * Returns function that returns from [_idx_key_hash](#_idx_key_hash) with `_val` function argument.
 */
export declare function _idx_key_hash_fn<I extends object[]>(_val: _item_key_idx_val_type<a1_item_type<I>>): (a1: I, key: string) => idx_key_hash_type;
export declare const _fn__idx_key_hash: typeof _idx_key_hash_fn;
export declare function _maybe_idx_key_hash_fn<I extends object[]>(_val: _item_key_idx_val_type<I>): (maybe_a1: maybe<I[]>, key: string) => idx_key_hash_type;
