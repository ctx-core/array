export type _item_key_idx_val_type</*@formatter:off*/
	Val extends unknown = unknown,
	Obj extends Record<string, Val> = Record<string, Val>
/*@formatter:on*/> = (val:Val, item:Obj, key:string|number, idx:number)=>string
