import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Calls slice on a1
 */
export declare function slice</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(a1: I[], begin_idx?: number, end_idx?: number): O;
export declare function maybe_slice</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(maybe_a1: maybe<I[]>, begin_idx?: number, end_idx?: number): maybe_undefined<O>;
