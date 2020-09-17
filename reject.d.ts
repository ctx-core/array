import type { _is_match_type } from './_is_match_type';
import type { maybe } from '@ctx-core/function';
/**
 * Returns Array of items not rejected by `fn`.
 */
export declare function reject<I = unknown>(a1: maybe<I[]>, _is_match: _is_match_type<I>): maybe<I[], undefined>;
