import type { _is_match_type } from './_is_match_type';
import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Returns first item in `a1` where `fn(a1[idx], idx)` is truthy.
 */
export declare function find<I extends unknown>(a1: I[], fn: _is_match_type<I>): maybe_undefined<I>;
export declare function maybe_find<I extends unknown>(maybe_a1: maybe<I[]>, fn: _is_match_type<I>): maybe_undefined<I>;
