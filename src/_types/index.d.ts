export declare type l1a_T<Val> = readonly [Val];
export declare type l2a_T<Val> = readonly [...l1a_T<Val>, Val];
export declare type l3a_T<Val> = readonly [...l2a_T<Val>, Val];
export declare type l4a_T<Val> = readonly [...l3a_T<Val>, Val];
export declare type l5a_T<Val> = readonly [...l4a_T<Val>, Val];
export declare type l6a_T<Val> = readonly [...l5a_T<Val>, Val];
export declare type l7a_T<Val> = readonly [...l6a_T<Val>, Val];
export declare type l8a_T<Val> = readonly [...l7a_T<Val>, Val];
export declare type l9a_T<Val> = readonly [...l8a_T<Val>, Val];
export declare type l10a_T<Val> = readonly [...l9a_T<Val>, Val];
export declare type l20a_T<Val> = readonly [...l10a_T<Val>, ...l10a_T<Val>];
export declare type l30a_T<Val> = readonly [...l20a_T<Val>, ...l10a_T<Val>];
export declare type l40a_T<Val> = readonly [...l30a_T<Val>, ...l10a_T<Val>];
export declare type l50a_T<Val> = readonly [...l40a_T<Val>, ...l10a_T<Val>];
export declare type l100a_T<Val> = readonly [...l50a_T<Val>, ...l50a_T<Val>];
export declare type l200a_T<Val> = readonly [...l100a_T<Val>, ...l100a_T<Val>];
export declare type l300a_T<Val> = readonly [...l200a_T<Val>, ...l100a_T<Val>];
export declare type l400a_T<Val> = readonly [...l300a_T<Val>, ...l100a_T<Val>];
export declare type l500a_T<Val> = readonly [...l400a_T<Val>, ...l100a_T<Val>];
export declare type l1000a_T<Val> = readonly [...l500a_T<Val>, ...l500a_T<Val>];
export declare type a1_T<A extends readonly any[]> = A;
export declare type a2_T<A extends readonly any[]> = a1_T<A>;
export declare type a3_T<A extends readonly any[]> = a2_T<A>;
export declare type a4_T<A extends readonly any[]> = a3_T<A>;
export declare type a5_T<A extends readonly any[]> = a4_T<A>;
export declare type a6_T<A extends readonly any[]> = a5_T<A>;
export declare type a7_T<A extends readonly any[]> = a6_T<A>;
export declare type a8_T<A extends readonly any[]> = a7_T<A>;
export declare type a9_T<A extends readonly any[]> = a8_T<A>;
export declare type a10_T<A extends readonly any[]> = a9_T<A>;
export declare type a20_T<A extends readonly any[]> = a10_T<a10_T<A>>;
export declare type a30_T<A extends readonly any[]> = a20_T<a10_T<A>>;
export declare type a40_T<A extends readonly any[]> = a30_T<a10_T<A>>;
export declare type a50_T<A extends readonly any[]> = a40_T<a10_T<A>>;
export declare type a100_T<A extends readonly any[]> = a50_T<a50_T<A>>;
export declare type a200_T<A extends readonly any[]> = a100_T<a100_T<A>>;
export declare type a300_T<A extends readonly any[]> = a200_T<a100_T<A>>;
export declare type a400_T<A extends readonly any[]> = a300_T<a100_T<A>>;
export declare type a500_T<A extends readonly any[]> = a400_T<a100_T<A>>;
export declare type a1000_T<A extends readonly any[]> = a500_T<a500_T<A>>;
/**
 * `ctx` of values & indices.
 */
export interface compact_a_ctx_I<I> {
	idx_a:number[];
	val_a:I[];
}
export declare type compact_a1_ctx_I<I> = compact_a_ctx_I<I>;
export declare type compare_1_T<Val extends unknown = unknown> = (val:Val, idx?:number)=>number;
export declare type compare_T<I extends unknown = unknown> = (a:I, b:I)=>number;
export declare type is_match_fn_T<Val extends unknown = unknown> = (in_value:Val, idx:number)=>boolean;
export declare type _is_match_T = is_match_fn_T;
export declare type _is_match_type = is_match_fn_T;
export declare type item_key_idx_val_fn_T<Val extends unknown = unknown, Obj extends Record<string, Val> =
	Record<string, Val>> =
	(val:Val, item:Obj, key:string|number, idx:number)=>string;
export declare type _item_key_idx_val_T = item_key_idx_val_fn_T;
export declare type _item_key_idx_val_type = item_key_idx_val_fn_T;
export declare type sort_idx_ctx_2_T<I extends unknown = unknown> =
	(a:readonly I[])=>sort_idx_ctx_T<I>;
export declare type sort_idx_ctx_a1_fn_type = sort_idx_ctx_2_T;
export declare type fn__a1__ctx__idx__sort = sort_idx_ctx_2_T;
export interface sort_idx_ctx_T<I extends unknown = unknown> {
	sort_idx_a:readonly number[];
	sort_val_a:I[];
}
export declare type ctx__idx__sort = sort_idx_ctx_T;
export declare type thold_a_compact_ctx__T<I extends unknown = unknown> =
	(in_val_a:readonly I[]|undefined)=>compact_a_ctx_I<I>;
export declare type thold_a1_compact_ctx_fn_type = thold_a_compact_ctx__T;
