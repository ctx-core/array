/**
 * Returns a function that returns value of `_idx_item_hash` with `item_` argument.
 */
export function idx_item_r_2(item_) {
	return (in_a)=>{
		let idx_item_r = {}
		if (in_a) {
			const a = in_a
			for (let idx = 0; idx < a.length; idx++) {
				const item = item_ ? item_(a[idx], idx) : a[idx]
				idx_item_r[item] = idx
			}
		}
		return idx_item_r
	}
}
export {
	idx_item_r_2 as idx_item_h_2,
	idx_item_r_2 as idx_item_hash_2,
	idx_item_r_2 as _idx_item_hash_fn,
	idx_item_r_2 as _fn__idx_item_hash,
}
