import type { maybe } from '@ctx-core/function';
/**
 * Returns a function that returns value of `_idx_item_hash` with `_item` argument.
 */
export declare function _idx_item_hash_fn(_item: (in_value: string, idx: number) => string): idx_item_hash_fn_type;
export interface idx_item_hash_type extends Record<string, number> {
}
export declare type idx_item_hash_fn_type = (a1: maybe<string[]>) => idx_item_hash_type;
export { _idx_item_hash_fn as _fn__idx_item_hash };
