import type { maybe, maybe_undefined } from '@ctx-core/function'
import type { _is_match_T } from './_is_match_T'
import { filter, maybe_filter } from './filter'
/**
 * Returns Array of items not rejected by `fn`.
 */
export function reject</*@formatter:off*/
	Val extends unknown = unknown,
	Out extends unknown = Val[]
>/*@formatter:on*/(
	a1:Val[],
	_is_match:_is_match_T<Val>
):Out {
	return filter<Val>(
		a1,
		(value:Val, idx:number)=>!_is_match(value, idx)
	) as Out
}
export function maybe_reject</*@formatter:off*/
	Val extends unknown = unknown,
	Out extends unknown = Val[]
>/*@formatter:on*/(
	maybe_a1:maybe<Val[]>,
	_is_match:_is_match_T<Val>
):maybe_undefined<Out> {
	return maybe_filter<Val>(
		maybe_a1,
		(value, idx:number)=>!_is_match(value, idx)
	) as Out
}
