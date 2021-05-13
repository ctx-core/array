import type { falsy } from '@ctx-core/function';
/**
 * Map return value of `fn(a1[], i)` into an Array.
 */
export declare function map<Val extends unknown = unknown, Out extends unknown = unknown>(a1: Val[], fn: map_fn_type<Val, Out>): Out[];
export declare function maybe_map<Val extends unknown, Out extends unknown>(maybe_a1: Val[] | falsy, fn: map_fn_type<Val, Out>): Out[] | undefined;
export declare type map_fn_type<Val extends unknown, Out extends unknown> = (val: Val, idx: number) => Out;
