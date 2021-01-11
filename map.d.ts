import type { maybe } from '@ctx-core/function';
/**
 * Map return value of `fn(a1[], i)` into an Array.
 */
export declare function map<I extends unknown = unknown, O extends unknown = unknown>(a1: I[], fn: map_fn_type<I, O>): O[];
export declare function maybe_map<I extends unknown, O extends unknown>(maybe_a1: maybe<I[]>, fn: map_fn_type<I, O>): maybe<O[], undefined>;
export declare type map_fn_type<I extends unknown, O extends unknown> = (val: I, idx: number) => O;
