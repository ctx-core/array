import type { is_match_fn_T } from './is_match_fn_T';
/**
 * Returns function that returns value from [reject](#reject) with `fn` argument.
 */
export declare function reject_</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(is_match_: is_match_fn_T<I>): (a: I[]) => O;
export declare function maybe_reject_</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(is_match_: is_match_fn_T<I>): (a: I[] | undefined) => O | undefined;
export { reject_ as _reject, reject_ as _fn__reject, maybe_reject_ as _maybe_reject, };
