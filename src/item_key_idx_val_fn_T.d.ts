export declare type item_key_idx_val_fn_T</*@formatter:off*/ Val extends unknown = unknown, Obj extends Record<string, Val> = Record<string, Val>> = (val: Val, item: Obj, key: string | number, idx: number) => string;
export declare type _item_key_idx_val_T = item_key_idx_val_fn_T;
export declare type _item_key_idx_val_type = item_key_idx_val_fn_T;
