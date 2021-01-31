import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Reverses the order of items in `in_a1` by mutating `in_a1`.
 */
export declare function reverse</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(in_a1: I[]): O;
export declare function maybe_reverse</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(maybe_a1: maybe<I[]>): maybe_undefined<O>;
