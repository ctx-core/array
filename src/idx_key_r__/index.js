import { I__ } from '@ctx-core/combinators'
import { idx_key_r_, maybe_idx_key_r_ } from '../idx_key_r_/index.js'
/** @type {import('../idx_key_r_').idx_key_r_T}idx_key_r_T */
/** @type {import('../_types').item_key_idx_val_fn_T}item_key_idx_val_f	n_T */
/**
 * Returns function that returns from [_idx_key_hash](#_idx_key_hash) with `item_key_idx_val_` function argument.
 * @param item_key_idx_val_{item_key_idx_val_fn_T<string, Record<string, string>>}
 * @returns {(a:Record<string, string>[], key:string|number)=>idx_key_r_T}
 */
export function idx_key_r__(
	item_key_idx_val_ = I__
) {
	return (a, key)=>idx_key_r_(a, key, item_key_idx_val_)
}
/**
 * @param item_key_idx_val_{item_key_idx_val_fn_T<string, Record<string, string>>}
 * @param or{idx_key_r_T|null|unknown}
 * @returns {(maybe_a:Record<string, string>[]|undefined, key:string)=>idx_key_r_T|null|unknown}
 */
export function maybe_idx_key_r__(
	item_key_idx_val_ = I__,
	or = null
) {
	return (maybe_a, key)=>
		maybe_idx_key_r_(maybe_a, key, item_key_idx_val_, or)
}
export {
	idx_key_r__ as idx_key_h_2,
	idx_key_r__ as _idx_key_hash_fn,
	idx_key_r__ as _fn__idx_key_hash,
	maybe_idx_key_r__ as _maybe_idx_key_hash_fn,
	maybe_idx_key_r__ as maybe_idx_key_h_2,
}
