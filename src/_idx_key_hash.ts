import type { falsy } from '@ctx-core/function'
import { I__ } from '@ctx-core/combinators'
import type { _item_key_idx_val_T } from './_item_key_idx_val_T'
/**
 * Returns a Hash where each key is `a1[idx][key]` & value is `idx`.
 */
export function _idx_key_hash<Obj extends Record<string, string> = Record<string, string>>(
	a1:Obj[],
	key:string|number,
	_val:_item_key_idx_val_T<string, Obj> = I__ as _item_key_idx_val_T<string, Obj>
) {
	let idx_key_hash = {} as idx_key_hash_type
	if (a1) {
		for (let idx = 0; idx < a1.length; idx++) {
			const obj = a1[idx]
			const val = _val ? _val(obj && obj[key], obj, key, idx) : (obj && obj[key])
			if (!val) continue
			idx_key_hash[val] = idx
		}
	}
	return idx_key_hash
}
export interface idx_key_hash_type extends Record<string, number> {}
export function _maybe_idx_key_hash<Obj extends Record<string, string> = Record<string, string>>(
	maybe_a1:Obj[]|falsy,
	key:string|number,
	_val:_item_key_idx_val_T<string, Obj> = I__ as _item_key_idx_val_T<string, Obj>
) {
	return _idx_key_hash<Obj>(maybe_a1 as Obj[], key, _val)
}
export { _idx_key_hash as _hash__key__idx }
