import type { maybe } from '@ctx-core/function';
import type { _is_match_type } from './_is_match_type';
/**
 * Returns Array where items in `a1` are filtered by `fn`.
 */
export declare function filter<I = unknown>(in_a1: maybe<I[]>, _is_match: _is_match_type<I>): I[];
