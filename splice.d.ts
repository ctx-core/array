import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Calls splice on a1
 */
export declare function splice<I extends unknown>(a1: I[], start: number, delete_count?: number, ...arg_a1: I[]): I[];
export declare function maybe_splice<I extends unknown>(maybe_a1: maybe<I[]>, start: number, delete_count?: number, ...arg_a1: I[]): maybe_undefined<I[]>;
