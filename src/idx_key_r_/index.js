import { I__ } from '@ctx-core/combinators'
/** @type {import('../_types').item_key_idx_val_fn_T}item_key_idx_val_fn_T */
/** @type {import('./index.d.ts').idx_key_r_T}idx_key_r_T */
/**
 * Returns a Hash where each key is `a[idx][key]` & value is `idx`.
 * @param a{unknown[]}
 * @param key{string|number}
 * @param item_key_idx_val_{item_key_idx_val_fn_T<string, Record<string, string>>}
 * @returns {idx_key_r_T}
 */
export function idx_key_r_(a, key, item_key_idx_val_ = I__) {
	let idx_key_r = {}
	if (a) {
		for (let idx = 0; idx < a.length; idx++) {
			const obj = a[idx]
			const val =
				item_key_idx_val_
				? item_key_idx_val_(obj && obj[key], obj, key, idx)
				: obj && obj[key]
			if (!val) continue
			idx_key_r[val] = idx
		}
	}
	return idx_key_r
}
/**
 * @param maybe_a{unknown[]|undefined}
 * @param key{string|number}
 * @param item_key_idx_val_{item_key_idx_val_fn_T<string, Record<string, string>>}
 * @param or{idx_key_r_T|null|undefined}
 * @returns {idx_key_r_T|null|undefined}
 */
export function maybe_idx_key_r_(
	maybe_a,
	key,
	item_key_idx_val_ = I__,
	or = null
) {
	return maybe_a ? idx_key_r_(maybe_a, key, item_key_idx_val_) : or
}
export {
	idx_key_r_ as idx_key_h_,
	idx_key_r_ as _idx_key_hash,
	idx_key_r_ as _hash__key__idx,
	maybe_idx_key_r_ as maybe_idx_key_h_,
	maybe_idx_key_r_ as _maybe_idx_key_hash,
}
