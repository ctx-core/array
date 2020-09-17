import { maybe } from '@ctx-core/function';
/**
 * Flattens the a1 & it's children into an a1 without chunks
 */
export declare function flatten<I = unknown>(in_a1: maybe<I[]>): maybe<I[], undefined>;
export declare const flatten__a1: typeof flatten;
