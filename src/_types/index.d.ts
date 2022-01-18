export declare type a1_T<Val> = readonly [Val];
export declare type a2_T<Val> = readonly [...a1_T<Val>, Val];
export declare type a3_T<Val> = readonly [...a2_T<Val>, Val];
export declare type a4_T<Val> = readonly [...a3_T<Val>, Val];
export declare type a5_T<Val> = readonly [...a4_T<Val>, Val];
export declare type a6_T<Val> = readonly [...a5_T<Val>, Val];
export declare type a7_T<Val> = readonly [...a6_T<Val>, Val];
export declare type a8_T<Val> = readonly [...a7_T<Val>, Val];
export declare type a9_T<Val> = readonly [...a8_T<Val>, Val];
export declare type a10_T<Val> = readonly [...a9_T<Val>, Val];
export declare type a20_T<Val> = readonly [...a10_T<Val>, ...a10_T<Val>];
export declare type a30_T<Val> = readonly [...a20_T<Val>, ...a10_T<Val>];
export declare type a40_T<Val> = readonly [...a30_T<Val>, ...a10_T<Val>];
export declare type a50_T<Val> = readonly [...a40_T<Val>, ...a10_T<Val>];
export declare type a100_T<Val> = readonly [...a50_T<Val>, ...a50_T<Val>];
export declare type a200_T<Val> = readonly [...a100_T<Val>, ...a100_T<Val>];
export declare type a300_T<Val> = readonly [...a200_T<Val>, ...a100_T<Val>];
export declare type a400_T<Val> = readonly [...a300_T<Val>, ...a100_T<Val>];
export declare type a500_T<Val> = readonly [...a400_T<Val>, ...a100_T<Val>];
export declare type a1000_T<Val> = readonly [...a500_T<Val>, ...a500_T<Val>];
export declare type a_1_T<A extends readonly any[]> = A;
export declare type a_2_T<A extends readonly any[]> = a_1_T<A>;
export declare type a_3_T<A extends readonly any[]> = a_2_T<A>;
export declare type a_4_T<A extends readonly any[]> = a_3_T<A>;
export declare type a_5_T<A extends readonly any[]> = a_4_T<A>;
export declare type a_6_T<A extends readonly any[]> = a_5_T<A>;
export declare type a_7_T<A extends readonly any[]> = a_6_T<A>;
export declare type a_8_T<A extends readonly any[]> = a_7_T<A>;
export declare type a_9_T<A extends readonly any[]> = a_8_T<A>;
export declare type a_10_T<A extends readonly any[]> = a_9_T<A>;
export declare type a_20_T<A extends readonly any[]> = a_10_T<a_10_T<A>>;
export declare type a_30_T<A extends readonly any[]> = a_20_T<a_10_T<A>>;
export declare type a_40_T<A extends readonly any[]> = a_30_T<a_10_T<A>>;
export declare type a_50_T<A extends readonly any[]> = a_40_T<a_10_T<A>>;
export declare type a_100_T<A extends readonly any[]> = a_50_T<a_50_T<A>>;
export declare type a_200_T<A extends readonly any[]> = a_100_T<a_100_T<A>>;
export declare type a_300_T<A extends readonly any[]> = a_200_T<a_100_T<A>>;
export declare type a_400_T<A extends readonly any[]> = a_300_T<a_100_T<A>>;
export declare type a_500_T<A extends readonly any[]> = a_400_T<a_100_T<A>>;
export declare type a_1000_T<A extends readonly any[]> = a_500_T<a_500_T<A>>;
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
