import type { maybe, maybe_undefined } from '@ctx-core/function';
import type { _is_match_type } from './_is_match_type';
/**
 * Returns Array of items not rejected by `fn`.
 */
export declare function reject</*@formatter:off*/ Val extends unknown = unknown, Out extends unknown = Val[]>(a1: Val[], _is_match: _is_match_type<Val>): Out;
export declare function maybe_reject</*@formatter:off*/ Val extends unknown = unknown, Out extends unknown = Val[]>(maybe_a1: maybe<Val[]>, _is_match: _is_match_type<Val>): maybe_undefined<Out>;
