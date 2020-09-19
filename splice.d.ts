import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Calls splice on a1
 */
export declare function splice<I>(a1: I[], start: number, delete_count?: number, ...arg_a1: I[]): maybe<I[], undefined>;
export declare function maybe_splice<I>(maybe_a1: maybe<I[]>, start: number, delete_count?: number, ...arg_a1: I[]): maybe_undefined<I[]>;
