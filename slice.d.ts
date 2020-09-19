import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Calls slice on a1
 */
export declare function slice<I extends unknown[]>(a1: I, begin_idx?: number, end_idx?: number): I;
export declare function maybe_slice<I extends unknown[]>(in_a1: maybe<I>, begin_idx?: number, end_idx?: number): maybe_undefined<I>;
