import type { compare_type } from './compare_type';
import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Sorts a copy of `a1` by the `compare` function.
 */
export declare function _sort_a1<I extends unknown[]>(a1: I, compare?: compare_type<I[number]>): I;
export declare const _a1__sort: typeof _sort_a1;
export declare function _maybe_sort_a1<I extends unknown[]>(maybe_a1: maybe<I>, compare?: compare_type<I[number]>): maybe_undefined<I>;
