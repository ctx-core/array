import type { _is_match_type } from './_is_match_type';
import type { maybe } from '@ctx-core/function';
/**
 * Returns function that returns value from [find](#find) with `fn` argument.
 */
export declare function _find<I = unknown>(fn: _is_match_type<I>): (a1_maybe: maybe<I[]>) => I;
