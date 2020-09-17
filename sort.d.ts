import type { compare_type } from './compare_type';
import type { maybe } from '@ctx-core/function';
/**
 * Sort items in `in_a1` by the `compare` function
 */
export declare function sort<I = unknown>(in_a1: maybe<I[]>, compare?: compare_type): maybe<I[], undefined>;
