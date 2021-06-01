/**
 * Returns a function that returns value of `_idx_item_hash` with `item_` argument.
 */
export function idx_item_h_2(
	item_:(in_value:string, idx:number)=>string
):idx_item_h_fn_T {
	return in_a=>{
		let idx_item_h = {} as idx_item_h_T
		if (in_a) {
			const a = in_a as string[]
			for (let idx = 0; idx < a.length; idx++) {
				const item = item_ ? item_(a[idx], idx) : a[idx]
				idx_item_h[item] = idx
			}
		}
		return idx_item_h
	}
}
export interface idx_item_h_T extends Record<string, number> {}
export type idx_item_h_fn_T = (a:string[]|undefined)=>idx_item_h_T
export {
	idx_item_h_2 as idx_item_hash_2,
	idx_item_h_2 as _idx_item_hash_fn,
	idx_item_h_2 as _fn__idx_item_hash,
}
