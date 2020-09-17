import type { maybe } from '@ctx-core/function'
/**
 * Returns a function that returns value of `_idx_item_hash` with `_item` argument.
 */
export function _idx_item_hash_fn(_item:(in_value:string, number)=>string):(a1:maybe<string[]>)=>idx_item_hash_fn_type {
	return in_a1=>{
		let idx_item_hash = {} as idx_item_hash_fn_type
		if (in_a1) {
			const a1 = in_a1 as string[]
			for (let idx = 0; idx < a1.length; idx++) {
				const item = _item ? _item(a1[idx], idx) : a1[idx]
				idx_item_hash[item] = idx
			}
		}
		return idx_item_hash
	}
}
export const _fn__idx_item_hash = _idx_item_hash_fn
export type idx_item_hash_fn_type = Record<string, number>
