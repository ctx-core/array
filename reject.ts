import type { maybe, maybe_undefined } from '@ctx-core/function'
import type { _is_match_type } from './_is_match_type'
import { filter, maybe_filter } from './filter'
/**
 * Returns Array of items not rejected by `fn`.
 */
export function reject</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	a1:I[],
	_is_match:_is_match_type<I>
):O {
	return filter<I>(
		a1,
		(value:I, idx:number)=>!_is_match(value, idx)
	) as O
}
export function maybe_reject</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	maybe_a1:maybe<I[]>,
	_is_match:_is_match_type<I>
):maybe_undefined<O> {
	return maybe_filter<I>(
		maybe_a1,
		(value, idx:number)=>!_is_match(value, idx)
	) as O
}
