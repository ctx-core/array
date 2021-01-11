import { I__ } from '@ctx-core/combinators'
import type { _item_key_idx_val_type } from './_item_key_idx_val_type'
import type { a1_item_type, maybe } from '@ctx-core/function'
/**
 * Returns a Hash where each key is `a1[idx][key]` & value is `idx`.
 */
export function _idx_key_hash<I extends object[] = object[]>(
	a1: I,
	key: string|number,
	_val = I__ as _item_key_idx_val_type<a1_item_type<I>>
) {
	let idx_key_hash = {} as idx_key_hash_type
	if (a1) {
		for (let idx = 0; idx < a1.length; idx++) {
			const item = a1[idx] as a1_item_type<I>
			const val = _val ? _val(item && item[key], item, key, idx) : (item && item[key])
			if (!val) continue
			idx_key_hash[val] = idx
		}
	}
	return idx_key_hash
}
export interface idx_key_hash_type extends Record<string, number> {}
export function _maybe_idx_key_hash<I extends object[] = object[]>(
	maybe_a1: maybe<I>,
	key: string|number,
	_val = I__ as _item_key_idx_val_type<a1_item_type<I>>
) {
	return _idx_key_hash<I>(maybe_a1 as I, key, _val)
}
export { _idx_key_hash as _hash__key__idx }
