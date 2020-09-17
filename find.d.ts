import type { _is_match_type } from './_is_match_type';
import type { maybe } from '@ctx-core/function';
/**
 * Returns first item in `a1` where `fn(a1[idx], idx)` is truthy.
 */
export declare function find<I = unknown>(a1_maybe: maybe<I[]>, fn: _is_match_type<I>): maybe<I, undefined>;
