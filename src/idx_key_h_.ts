import { I__ } from '@ctx-core/combinators'
import type { item_key_idx_val_fn_T } from './item_key_idx_val_fn_T'
/**
 * Returns a Hash where each key is `a[idx][key]` & value is `idx`.
 */
export function idx_key_h_<Obj extends Record<string, string> = Record<string, string>>(
	a:Obj[],
	key:string|number,
	item_key_idx_val_:item_key_idx_val_fn_T<string, Obj> = I__ as item_key_idx_val_fn_T<string, Obj>
) {
	let idx_key_hash = {} as idx_key_hash_T
	if (a) {
		for (let idx = 0; idx < a.length; idx++) {
			const obj = a[idx]
			const val = item_key_idx_val_ ? item_key_idx_val_(obj && obj[key], obj, key, idx) : (obj && obj[key])
			if (!val) continue
			idx_key_hash[val] = idx
		}
	}
	return idx_key_hash
}
export interface idx_key_hash_T extends Record<string, number> {}
export function maybe_idx_key_h_<Obj extends Record<string, string> = Record<string, string>>(
	maybe_a:Obj[]|undefined,
	key:string|number,
	item_key_idx_val_:item_key_idx_val_fn_T<string, Obj> = I__ as item_key_idx_val_fn_T<string, Obj>
) {
	return idx_key_h_<Obj>(maybe_a as Obj[], key, item_key_idx_val_)
}
export {
	idx_key_h_ as _idx_key_hash,
	idx_key_h_ as _hash__key__idx,
	maybe_idx_key_h_ as _maybe_idx_key_hash,
}
