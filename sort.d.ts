import type { compare_type } from './compare_type';
import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Sort items in `a1` by the `compare` function
 */
export declare function sort<I extends unknown[]>(a1: I, compare?: compare_type<I[number]>): I;
export declare function maybe_sort<I extends unknown[]>(maybe_a1: maybe<I>, compare?: compare_type<I[number]>): maybe_undefined<I>;
