import type { maybe } from '@ctx-core/function';
/**
 * Returns a function that returns value of `_idx_item_hash` with `_item` argument.
 */
export declare function _idx_item_hash_fn(_item: (in_value: string, number: any) => string): idx_item_hash_fn_type;
export declare const _fn__idx_item_hash: typeof _idx_item_hash_fn;
export declare type idx_item_hash_type = Record<string, number>;
export declare type idx_item_hash_fn_type = (a1: maybe<string[]>) => idx_item_hash_type;
