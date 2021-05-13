import type { falsy } from '@ctx-core/function';
import type { _is_match_type } from './_is_match_type';
/**
 * Returns first item in `a1` where `fn(a1[idx], idx)` is truthy.
 */
export declare function find<I extends unknown = unknown>(a1: I[], fn: _is_match_type<I>): I | undefined;
export declare function maybe_find<I extends unknown = unknown>(maybe_a1: I[] | falsy, fn: _is_match_type<I>): I | undefined;
