export type _is_match_T<Val extends unknown = unknown> =
	(in_value:Val, idx:number)=>boolean
export type _is_match_type = _is_match_T
