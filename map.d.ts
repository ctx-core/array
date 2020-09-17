import type { maybe } from '@ctx-core/function';
/**
 * Map return value of `fn(a1[], i)` into an Array.
 */
export declare function map<I = unknown, O = unknown>(in_a1: maybe<I[]>, fn: (val: I, idx: number) => O): maybe<O[], undefined>;
