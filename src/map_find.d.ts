import type { maybe } from '@ctx-core/function';
/**
 * Returns first return value of `fn(a1[idx], idx)` where `fn(a1[idx], idx)` is truthy.
 */
export declare function map_find<I extends unknown = unknown, O extends unknown = I>(a1: I[], fn: (val: I, number: any) => maybe<O>): O | undefined;
export declare function maybe_map_find<I extends unknown = unknown, O extends unknown = I>(maybe_a1: maybe<I[]>, fn: (I: any, number: any) => maybe<O>): maybe<O, undefined>;
export { map_find as find__map, };
