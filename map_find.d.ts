import type { maybe } from '@ctx-core/function';
/**
 * Returns first return value of `fn(a1[idx], idx)` where `fn(a1[idx], idx)` is truthy.
 */
export declare function map_find<I = unknown, O = I>(in_a1: maybe<I[]>, fn: (any: any, number: any) => maybe<O>): maybe<O, undefined>;
export declare const find__map: typeof map_find;
