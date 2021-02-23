import type { maybe, maybe_undefined } from '@ctx-core/function';
import type { compare_type } from './compare_type';
/**
 * Sorts a copy of `a1` by the `compare` function.
 */
export declare function _sort_a1<I extends unknown = unknown>(a1: I[], compare?: compare_type<I>): I[];
export declare function _maybe_sort_a1<I extends unknown = unknown>(maybe_a1: maybe<I[]>, compare?: compare_type<I>): maybe_undefined<I[]>;
export { _sort_a1 as _a1__sort, };
