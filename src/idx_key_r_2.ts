import { I__ } from '@ctx-core/combinators'
import type { item_key_idx_val_fn_T } from './item_key_idx_val_fn_T.js'
import { idx_key_r_, maybe_idx_key_r_, idx_key_r_T } from './idx_key_r_.js'
/**
 * Returns function that returns from [_idx_key_hash](#_idx_key_hash) with `item_key_idx_val_` function argument.
 */
export function idx_key_r_2<Obj extends Record<string, string> = Record<string, string>>(
	item_key_idx_val_:item_key_idx_val_fn_T<string, Obj> = I__ as item_key_idx_val_fn_T<string, Obj>
):(a:Obj[], key:string|number)=>idx_key_r_T {
	return (a, key)=>idx_key_r_<Obj>(a, key, item_key_idx_val_)
}
export function maybe_idx_key_r_2<Obj extends Record<string, string> = Record<string, string>>(
	item_key_idx_val_:item_key_idx_val_fn_T<string, Obj> = I__ as item_key_idx_val_fn_T<string, Obj>
):(maybe_a:Obj[]|undefined, key:string)=>idx_key_r_T {
	return (
		maybe_a, key
	)=>maybe_idx_key_r_(maybe_a, key, item_key_idx_val_)
}
export {
	idx_key_r_2 as idx_key_h_2,
	idx_key_r_2 as _idx_key_hash_fn,
	idx_key_r_2 as _fn__idx_key_hash,
	maybe_idx_key_r_2 as _maybe_idx_key_hash_fn,
	maybe_idx_key_r_2 as maybe_idx_key_h_2,
}
