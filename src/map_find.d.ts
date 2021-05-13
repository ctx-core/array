import type { falsy } from '@ctx-core/function';
/**
 * Returns first return value of `fn(a1[idx], idx)` where `fn(a1[idx], idx)` is truthy.
 */
export declare function map_find<Val extends unknown = unknown, Out extends unknown = Val>(a1: Val[], fn: (val: Val, i: number) => Out | falsy): Out | undefined;
export declare function maybe_map_find<Val extends unknown = unknown, Out extends unknown = Val>(maybe_a1: Val[] | falsy, fn: (val: Val, i: number) => Out | falsy): Out | undefined;
export { map_find as find__map, };
