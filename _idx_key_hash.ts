import type { falsy } from '@ctx-core/function'
import { I__ } from '@ctx-core/combinators'
import type { _item_key_idx_val_type } from './_item_key_idx_val_type'
/**
 * Returns a Hash where each key is `a1[idx][key]` & value is `idx`.
 */
export function _idx_key_hash(a1:falsy|any[], key:string|number, _val:_item_key_idx_val_type = I__):any {
	let idx_key_hash = {}
	if (a1) {
		for (let idx = 0; idx < a1.length; idx++) {
			const item = a1[idx]
			const val = _val ? _val(item && item[key], item, key, idx) : (item && item[key])
			if (!val) continue
			idx_key_hash[val] = idx
		}
	}
	return idx_key_hash
}
export const _hash__key__idx = _idx_key_hash
