export type _item_key_idx_val_type<I extends object = object> =
	(val:I[keyof I], item:I, key:string|number, idx:number)=>I[keyof I]
