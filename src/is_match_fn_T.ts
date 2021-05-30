export type is_match_fn_T<Val extends unknown = unknown> =
	(in_value:Val, idx:number)=>boolean
export type _is_match_T = is_match_fn_T
export type _is_match_type = is_match_fn_T
