import type { maybe } from '@ctx-core/function';
/**
 * Calls splice on in_a1
 */
export declare function splice<I = unknown>(in_a1: maybe<I[]>, start: number, delete_count?: number, ...arg_a1: I[]): maybe<I[], undefined>;
