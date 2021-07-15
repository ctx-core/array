import type { is_match_fn_T } from './is_match_fn_T.js'
import { maybe_reject, reject } from './reject.js'
/**
 * Returns function that returns value from [reject](#reject) with `fn` argument.
 */
export function reject_</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	is_match_:is_match_fn_T<I>
):(a:I[])=>O {
	return a=>reject<I, O>(a, is_match_) as O
}
export function maybe_reject_</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	is_match_:is_match_fn_T<I>
):(a:I[]|undefined)=>O|undefined {
	return a=>maybe_reject<I, O>(a, is_match_) as O|undefined
}
export {
	reject_ as _reject,
	reject_ as _fn__reject,
	maybe_reject_ as _maybe_reject,
}
