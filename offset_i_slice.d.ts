import type { maybe } from '@ctx-core/function';
/**
 * Returns an Array from slicing an a1 from an a1's offset from position i
 */
export declare function offset_i_slice<I = unknown>(a1: maybe<I[]>, i: number, offset?: number): maybe<I[], undefined>;
export declare const slice__i__offset: typeof offset_i_slice;
