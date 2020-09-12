import type { falsy } from '@ctx-core/function'
/**
 * Returns a function that returns value of `_idx_item_hash` with `_item` argument.
 */
export function _idx_item_hash_fn(_item:(any, number)=>any):(a1:falsy|any[])=>any {
	return a1=>{
		let idx_item_hash = {}
		if (a1) {
			for (let idx = 0; idx < a1.length; idx++) {
				const item = _item ? _item(a1[idx], idx) : a1[idx]
				idx_item_hash[item] = idx
			}
		}
		return idx_item_hash
	}
}
export const _fn__idx_item_hash = _idx_item_hash_fn
