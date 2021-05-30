export type item_key_idx_val_fn_T</*@formatter:off*/
	Val extends unknown = unknown,
	Obj extends Record<string, Val> = Record<string, Val>
/*@formatter:on*/> = (val:Val, item:Obj, key:string|number, idx:number)=>string
export type _item_key_idx_val_T = item_key_idx_val_fn_T
export type _item_key_idx_val_type = item_key_idx_val_fn_T
