import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Reverses the order of items in `in_a1` by mutating `in_a1`.
 */
export declare function reverse<I extends unknown>(in_a1: I[]): I[];
export declare function maybe_reverse<I extends unknown>(maybe_a1: maybe<I[]>): maybe_undefined<I[]>;
