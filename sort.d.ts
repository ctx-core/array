import type { maybe, maybe_undefined } from '@ctx-core/function';
import type { compare_type } from './compare_type';
/**
 * Sort items in `a1` by the `compare` function
 */
export declare function sort<I extends unknown = unknown>(a1: I[], compare?: compare_type<I>): I[];
export declare function maybe_sort<I extends unknown = unknown>(maybe_a1: maybe<I[]>, compare?: compare_type<I>): maybe_undefined<I[]>;
