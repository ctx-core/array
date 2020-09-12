import type { falsy } from '@ctx-core/function';
import type { _item_key_idx_val_type } from './_item_key_idx_val_type';
/**
 * Returns a Hash where each key is `a1[idx][key]` & value is `idx`.
 */
export declare function _idx_key_hash(a1: falsy | any[], key: string | number, _val?: _item_key_idx_val_type): any;
export declare const _hash__key__idx: typeof _idx_key_hash;
