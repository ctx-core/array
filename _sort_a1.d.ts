import type { compare_type } from './compare_type';
import type { maybe } from '@ctx-core/function';
/**
 * Sorts a copy of `a1` by the `compare` function.
 */
export declare function _sort_a1<I extends unknown = unknown>(a1: I[], compare?: compare_type<I>): I[];
export declare const _a1__sort: typeof _sort_a1;
export declare function _maybe_sort_a1<I extends unknown = unknown>(maybe_a1: maybe<I[]>, compare?: compare_type<I>): maybe<I[], undefined>;
