import type { is_match_fn_T } from '../_types'
/**
 * Returns function that returns value from [reject](#reject) with `fn` argument.
 */
export declare function reject_<I extends unknown = unknown, O extends unknown = readonly I[]>(
	is_match_:is_match_fn_T<I>
):(a:readonly I[])=>O
export declare function maybe_reject_<I extends unknown = unknown, O extends unknown = readonly I[], Or = null>(
	is_match_:is_match_fn_T<I>, or?:Or
):(a:readonly I[]|undefined)=>O|Or
export { reject_ as _reject, reject_ as _fn__reject, maybe_reject_ as _maybe_reject, }
