import type { is_match_fn_T } from './is_match_fn_T';
/**
 * Returns Array of items not rejected by `fn`.
 */
export declare function reject</*@formatter:off*/ Val extends unknown = unknown, Out extends unknown = Val[]>(a: Val[], is_match_: is_match_fn_T<Val>): Out;
export declare function maybe_reject</*@formatter:off*/ Val extends unknown = unknown, Out extends unknown = Val[]>(maybe_a: Val[] | undefined, is_match_: is_match_fn_T<Val>): Out | undefined;
