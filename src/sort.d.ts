import type { maybe, maybe_undefined } from '@ctx-core/function';
import type { compare_type } from './compare_type';
/**
 * Sort items in `a1` by the `compare` function
 */
export declare function sort</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(a1: I[], compare?: compare_type<I>): O;
export declare function maybe_sort</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(maybe_a1: maybe<I[]>, compare?: compare_type<I>): maybe_undefined<O>;
