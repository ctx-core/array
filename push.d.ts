import type { maybe } from '@ctx-core/function';
/**
 * Calls push on a1
 */
export declare function push<I extends unknown>(a1: I[], ...arg_a1: I[]): number;
export declare function maybe_push<I extends unknown>(maybe_a1: maybe<I[]>, ...arg_a1: I[]): maybe<number, undefined>;
