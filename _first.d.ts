import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Returns the first item in `a1`.
 */
export declare function _first<I>(a1: I[]): maybe_undefined<I>;
export declare function _maybe_first<I>(maybe_a1: maybe<I[]>): maybe_undefined<I>;
