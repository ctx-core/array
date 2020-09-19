export type _item_key_idx_val_type<I extends object> = (val:I[keyof I], item:I, string, number)=>I[keyof I]
