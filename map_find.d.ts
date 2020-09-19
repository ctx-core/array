import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Returns first return value of `fn(a1[idx], idx)` where `fn(a1[idx], idx)` is truthy.
 */
export declare function map_find<I, O = I>(a1: I[], fn: (val: I, number: any) => maybe<O>): maybe_undefined<O>;
export declare const find__map: typeof map_find;
export declare function maybe_map_find<I, O = I>(maybe_a1: maybe<I[]>, fn: (I: any, number: any) => maybe<O>): maybe<O, undefined>;
