import type { idx_key_r_T } from '../idx_key_r_'
import type { item_key_idx_val_fn_T } from '../_types'
/**
 * Returns function that returns from [_idx_key_hash](#_idx_key_hash) with `item_key_idx_val_` function argument.
 */
export declare function idx_key_r_2<
	Obj extends Record<string, string> = Record<string, string>
>(
	item_key_idx_val_?:item_key_idx_val_fn_T<string, Obj>
):(a:readonly Obj[], key:string|number)=>idx_key_r_T
export declare function maybe_idx_key_r_2<
	Obj extends Record<string, string> = Record<string, string>,
	Or = null
>(
	item_key_idx_val_?:item_key_idx_val_fn_T<string, Obj>,
	or?:Or
):(maybe_a:Obj[]|undefined, key:string)=>idx_key_r_T|Or
export {
	idx_key_r_2 as idx_key_h_2,
	idx_key_r_2 as _idx_key_hash_fn,
	idx_key_r_2 as _fn__idx_key_hash,
	maybe_idx_key_r_2 as _maybe_idx_key_hash_fn,
	maybe_idx_key_r_2 as maybe_idx_key_h_2,
}
