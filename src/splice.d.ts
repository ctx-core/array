import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Calls splice on a1
 */
export declare function splice</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(a1: I[], start: number, delete_count?: number, ...arg_a1: I[]): O;
export declare function maybe_splice</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(maybe_a1: maybe<I[]>, start: number, delete_count?: number, ...arg_a1: I[]): maybe_undefined<O>;
