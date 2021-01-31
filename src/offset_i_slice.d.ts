import type { maybe } from '@ctx-core/function';
/**
 * Returns an Array from slicing an a1 from an a1's offset from position i
 */
export declare function offset_i_slice<I extends unknown = unknown>(a1: I[], i: number, offset?: number): I[];
export declare function maybe_offset_i_slice<I extends unknown = unknown>(maybe_a1: maybe<I[]>, i: number, offset?: number): maybe<I[], undefined>;
export { offset_i_slice as slice__i__offset, };
