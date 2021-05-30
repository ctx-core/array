import type { is_match_fn_T } from './is_match_fn_T'
import { filter, maybe_filter } from './filter'
/**
 * Returns Array of items not rejected by `fn`.
 */
export function reject</*@formatter:off*/
	Val extends unknown = unknown,
	Out extends unknown = Val[]
>/*@formatter:on*/(
	a:Val[],
	is_match_:is_match_fn_T<Val>
):Out {
	return filter<Val>(
		a,
		(value:Val, idx:number)=>!is_match_(value, idx)
	) as Out
}
export function maybe_reject</*@formatter:off*/
	Val extends unknown = unknown,
	Out extends unknown = Val[]
>/*@formatter:on*/(
	maybe_a:Val[]|undefined,
	is_match_:is_match_fn_T<Val>
):Out|undefined {
	return maybe_filter<Val>(
		maybe_a,
		(value, idx:number)=>!is_match_(value, idx)
	) as Out
}
