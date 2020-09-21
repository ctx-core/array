import type { _is_match_type } from './_is_match_type';
import type { maybe } from '@ctx-core/function';
/**
 * Returns function that returns value from [find](#find) with `fn` argument.
 */
export declare function _find<I extends unknown>(fn: _is_match_type<I>): (a1: I[]) => maybe<I, undefined>;
export declare function _maybe_find<I extends unknown>(fn: _is_match_type<I>): (maybe_a1: I[]) => maybe<I[], import("@ctx-core/function").falsy>;
