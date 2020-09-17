import type { maybe } from '@ctx-core/function';
/**
 * Iterate over each item in `a1` with `fn(a1[i], i)`.
 */
export declare function each<I = unknown>(in_a1: maybe<I[]>, fn: (I: any, number: any) => void): maybe<I[], undefined>;
