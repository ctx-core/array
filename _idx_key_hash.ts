import { I__ } from '@ctx-core/combinators'
import type { _item_key_idx_val_type } from './_item_key_idx_val_type'
import type { maybe } from '@ctx-core/function'
/**
 * Returns a Hash where each key is `a1[idx][key]` & value is `idx`.
 */
export function _idx_key_hash<I = unknown>(
	in_a1:maybe<I[]>,
	key:string|number,
	_val = I__ as _item_key_idx_val_type<I>
) {
	let idx_key_hash = {} as idx_key_hash_type
	if (in_a1) {
		const a1 = in_a1 as I[]
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
export type idx_key_hash_type = Record<string, number>
